'use client';

import { useMemo } from 'react';
import { ImageSettings, loadImage } from '@/lib/imageProcessor';

interface ImagePreviewProps {
  file: File | null;
  settings: ImageSettings;
  showOriginal: boolean;
}

export default function ImagePreview({ file, settings, showOriginal }: ImagePreviewProps) {
  const filter = useMemo(() => buildCssFilter(settings), [settings]);

  if (!file) return null;

  return (
    <div className="flex gap-6">
      {!showOriginal && (
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-700 mb-2">Enhanced</p>
          <div className="relative rounded-xl overflow-hidden border border-gray-200">
            <img
              src={URL.createObjectURL(file)}
              alt="Preview"
              className="w-full h-auto"
              style={{ filter }}
            />
          </div>
        </div>
      )}

      {showOriginal && (
        <>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-700 mb-2">Original</p>
            <div className="relative rounded-xl overflow-hidden border border-gray-200">
              <img
                src={URL.createObjectURL(file)}
                alt="Original"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-700 mb-2">Enhanced</p>
            <div className="relative rounded-xl overflow-hidden border border-gray-200">
              <img
                src={URL.createObjectURL(file)}
                alt="Enhanced"
                className="w-full h-auto"
                style={{ filter }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function buildCssFilter(settings: ImageSettings): string {
  const filters: string[] = [];
  const { brightness, contrast, blur, saturation, hue, exposure } = settings;

  if (brightness !== 0) filters.push(`brightness(${1 + brightness / 100})`);
  if (contrast !== 0) filters.push(`contrast(${1 + contrast / 100})`);
  if (blur > 0) filters.push(`blur(${blur}px)`);
  if (saturation !== 0) filters.push(`saturate(${1 + saturation / 100})`);
  if (hue !== 0) filters.push(`hue-rotate(${hue}deg)`);
  if (exposure !== 0) filters.push(`brightness(${1 + exposure / 100})`);

  return filters.length > 0 ? filters.join(' ') : 'none';
}
