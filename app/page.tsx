'use client';

import { useState } from 'react';
import ImageUploader from '@/components/ImageUploader';
import ImagePreview from '@/components/ImagePreview';
import EnhancementControls from '@/components/EnhancementControls';
import FormatSelector from '@/components/FormatSelector';
import DownloadButton from '@/components/DownloadButton';
import { getDefaultSettings, OutputFormat } from '@/lib/imageProcessor';
import type { ImageSettings } from '@/lib/imageProcessor';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Image Converter & Enhancer",
  description:
    "Free online tool to convert image formats and apply professional photo enhancements.",
  url: "https://yourdomain.com",
  applicationCategory: "Photography Application",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [settings, setSettings] = useState<ImageSettings>(getDefaultSettings());
  const [format, setFormat] = useState<OutputFormat>('png');
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <header className="text-center">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Image Converter & Enhancer
            </h1>
            <p className="text-gray-600 mt-2">
              Convert formats and adjust brightness, contrast, blur, and saturation
            </p>
          </header>

          {!file ? (
            <ImageUploader onFileSelect={setFile} />
          ) : (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setFile(null)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
                >
                  Upload New Image
                </button>
                <button
                  onClick={() => setShowOriginal(!showOriginal)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
                >
                  {showOriginal ? 'Hide Original' : 'Show Original'}
                </button>
              </div>

              <ImagePreview file={file} settings={settings} showOriginal={showOriginal} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <EnhancementControls settings={settings} onChange={setSettings} />
                <div className="space-y-6">
                  <FormatSelector
                    format={format}
                    quality={settings.quality}
                    onFormatChange={setFormat}
                    onQualityChange={(q) => setSettings({ ...settings, quality: q })}
                  />
                  <DownloadButton file={file} format={format} settings={settings} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
