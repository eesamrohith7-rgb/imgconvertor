export type OutputFormat = 'png' | 'jpeg' | 'webp' | 'gif' | 'avif' | 'bmp';

export interface ImageSettings {
  brightness: number;   // -100 to 100
  contrast: number;     // -100 to 100
  blur: number;         // 0 to 20
  saturation: number;   // -100 to 100
  hue: number;         // -180 to 180 (degrees)
  temperature: number;  // -100 to 100
  tint: number;         // -100 to 100
  vibrance: number;     // -100 to 100
  exposure: number;     // -100 to 100
  quality: number;       // 0 to 100
}

export interface ProcessedImage {
  blob: Blob;
  url: string;
  width: number;
  height: number;
}

const DEFAULT_SETTINGS: ImageSettings = {
  brightness: 0,
  contrast: 0,
  blur: 0,
  saturation: 0,
  hue: 0,
  temperature: 0,
  tint: 0,
  vibrance: 0,
  exposure: 0,
  quality: 90,
};

export function getDefaultSettings(): ImageSettings {
  return { ...DEFAULT_SETTINGS };
}

export function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}

export function applySettingsToCanvas(
  canvas: HTMLCanvasElement,
  settings: ImageSettings,
  originalWidth: number,
  originalHeight: number
): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  canvas.width = originalWidth;
  canvas.height = originalHeight;

  ctx.filter = buildCssFilter(settings);
  ctx.drawImage(canvas, 0, 0, originalWidth, originalHeight);
  ctx.filter = 'none';
}

function buildCssFilter(settings: ImageSettings): string {
  const filters: string[] = [];
  const { brightness, contrast, blur, saturation, hue, exposure } = settings;

  if (brightness !== 0) {
    filters.push(`brightness(${1 + brightness / 100})`);
  }
  if (contrast !== 0) {
    filters.push(`contrast(${1 + contrast / 100})`);
  }
  if (blur > 0) {
    filters.push(`blur(${blur}px)`);
  }
  if (saturation !== 0) {
    filters.push(`saturate(${1 + saturation / 100})`);
  }
  if (hue !== 0) {
    filters.push(`hue-rotate(${hue}deg)`);
  }
  if (exposure !== 0) {
    filters.push(`brightness(${1 + exposure / 100})`);
  }

  return filters.length > 0 ? filters.join(' ') : 'none';
}

export async function processImage(
  file: File,
  settings: ImageSettings,
  format: OutputFormat
): Promise<ProcessedImage> {
  const img = await loadImage(file);

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get canvas context');

  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  ctx.filter = buildCssFilter(settings);
  ctx.drawImage(img, 0, 0);
  ctx.filter = 'none';

  const mimeType = getMimeType(format);
  const quality = settings.quality / 100;

  const blob = await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (b) => (b ? resolve(b) : reject(new Error('Failed to create blob'))),
      mimeType,
      quality
    );
  });

  return {
    blob,
    url: URL.createObjectURL(blob),
    width: canvas.width,
    height: canvas.height,
  };
}

function getMimeType(format: OutputFormat): string {
  const map: Record<OutputFormat, string> = {
    png: 'image/png',
    jpeg: 'image/jpeg',
    webp: 'image/webp',
    gif: 'image/gif',
    avif: 'image/avif',
    bmp: 'image/bmp',
  };
  return map[format];
}

export function getFileExtension(format: OutputFormat): string {
  const map: Record<OutputFormat, string> = {
    png: 'png',
    jpeg: 'jpg',
    webp: 'webp',
    gif: 'gif',
    avif: 'avif',
    bmp: 'bmp',
  };
  return map[format];
}

export function downloadImage(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
