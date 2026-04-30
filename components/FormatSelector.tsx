'use client';

import { OutputFormat } from '@/lib/imageProcessor';

interface FormatSelectorProps {
  format: OutputFormat;
  quality: number;
  onFormatChange: (format: OutputFormat) => void;
  onQualityChange: (quality: number) => void;
}

const formats: { value: OutputFormat; label: string }[] = [
  { value: 'png', label: 'PNG' },
  { value: 'jpeg', label: 'JPEG' },
  { value: 'webp', label: 'WebP' },
  { value: 'gif', label: 'GIF' },
  { value: 'avif', label: 'AVIF' },
  { value: 'bmp', label: 'BMP' },
];

export default function FormatSelector({
  format,
  quality,
  onFormatChange,
  onQualityChange,
}: FormatSelectorProps) {
  const supportsQuality = format === 'jpeg' || format === 'webp' || format === 'avif';

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-gray-800">Output Format</h2>

      <div className="flex gap-3">
        {formats.map((f) => (
          <button
            key={f.value}
            onClick={() => onFormatChange(f.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              format === f.value
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {supportsQuality && (
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <span className="text-sm font-medium text-gray-700">Quality</span>
            <span className="text-sm text-gray-500">{quality}%</span>
          </div>
          <input
            type="range"
            min={10}
            max={100}
            step={5}
            value={quality}
            onChange={(e) => onQualityChange(Number(e.target.value))}
            className="w-full accent-purple-600"
          />
        </div>
      )}
    </div>
  );
}
