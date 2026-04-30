'use client';

import { useState } from 'react';
import { processImage, OutputFormat, ImageSettings, downloadImage, getFileExtension } from '@/lib/imageProcessor';

interface DownloadButtonProps {
  file: File;
  format: OutputFormat;
  settings: ImageSettings;
  disabled?: boolean;
}

export default function DownloadButton({ file, format, settings, disabled }: DownloadButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const result = await processImage(file, settings, format);
      const baseName = file.name.replace(/\.[^.]+$/, '');
      const ext = getFileExtension(format);
      downloadImage(result.blob, `${baseName}_enhanced.${ext}`);
    } catch (err) {
      console.error('Download failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={disabled || loading}
      className={`px-6 py-3 rounded-xl font-semibold transition-colors ${
        disabled || loading
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-md'
      }`}
    >
      {loading ? 'Processing...' : 'Download Image'}
    </button>
  );
}
