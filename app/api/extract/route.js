import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function POST(request) {
    try {
        const { url } = await request.json();

        if (!url) {
            return NextResponse.json({ error: 'URL is required' }, { status: 400 });
        }

        // Extract metadata using yt-dlp
        // We use --dump-json to get all available formats and metadata
        const { stdout, stderr } = await execAsync(`yt-dlp --dump-json "${url}"`);

        if (stderr && !stdout) {
            console.error('yt-dlp error:', stderr);
            return NextResponse.json({ error: 'Failed to extract metadata' }, { status: 500 });
        }

        const metadata = JSON.parse(stdout);

        // Filter and format available formats for the UI
        // We prioritize 4K (2160p) and 8K (4320p) if available
        const formats = metadata.formats
            .filter(f => f.vcodec !== 'none' || f.acodec !== 'none')
            .map(f => ({
                format_id: f.format_id,
                extension: f.ext,
                resolution: f.resolution || (f.vcodec === 'none' ? 'Audio Only' : 'Unknown'),
                qualityLabel: f.format_note || f.height + 'p',
                height: f.height || 0,
                filesize: f.filesize || f.filesize_approx,
                url: f.url,
                isAudio: f.vcodec === 'none'
            }))
            // Filter duplicates by quality label and extension, prioritizing better ones
            .filter((v, i, a) => a.findIndex(t => (t.qualityLabel === v.qualityLabel && t.extension === v.extension)) === i)
            .sort((a, b) => b.height - a.height); // Sort by quality descending (8K -> 4K -> 1080p...)

        return NextResponse.json({
            title: metadata.title,
            thumbnail: metadata.thumbnail,
            duration: metadata.duration_string,
            uploader: metadata.uploader,
            formats: formats
        });

    } catch (error) {
        console.error('Extraction error:', error);
        let errorMessage = error.message;
        if (errorMessage.includes('command not found') || errorMessage.includes('yt-dlp: not found')) {
            errorMessage = 'El motor de descarga no está instalado en este servidor (Vercel). Usa el enlace local o de localtunnel para probar las descargas en 4K/8K.';
        }
        return NextResponse.json({ error: 'Error en la extracción: ' + errorMessage }, { status: 500 });
    }
}
