'use client';

import { ImageSettings } from '@/lib/imageProcessor';

interface EnhancementControlsProps {
  settings: ImageSettings;
  onChange: (settings: ImageSettings) => void;
}

export default function EnhancementControls({ settings, onChange }: EnhancementControlsProps) {
  const handleChange = (key: keyof ImageSettings, value: number) => {
    onChange({ ...settings, [key]: value });
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-gray-800">Adjustments</h2>

      <Slider
        label="Brightness"
        value={settings.brightness}
        min={-100}
        max={100}
        onChange={(v) => handleChange('brightness', v)}
      />
      <Slider
        label="Contrast"
        value={settings.contrast}
        min={-100}
        max={100}
        onChange={(v) => handleChange('contrast', v)}
      />
      <Slider
        label="Exposure"
        value={settings.exposure}
        min={-100}
        max={100}
        onChange={(v) => handleChange('exposure', v)}
      />
      <Slider
        label="Saturation"
        value={settings.saturation}
        min={-100}
        max={100}
        onChange={(v) => handleChange('saturation', v)}
      />
      <Slider
        label="Vibrance"
        value={settings.vibrance}
        min={-100}
        max={100}
        onChange={(v) => handleChange('vibrance', v)}
      />
      <Slider
        label="Hue"
        value={settings.hue}
        min={-180}
        max={180}
        onChange={(v) => handleChange('hue', v)}
      />
      <Slider
        label="Temperature"
        value={settings.temperature}
        min={-100}
        max={100}
        onChange={(v) => handleChange('temperature', v)}
      />
      <Slider
        label="Tint"
        value={settings.tint}
        min={-100}
        max={100}
        onChange={(v) => handleChange('tint', v)}
      />
      <Slider
        label="Blur"
        value={settings.blur}
        min={0}
        max={20}
        step={0.5}
        onChange={(v) => handleChange('blur', v)}
      />
    </div>
  );
}

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}

function Slider({ label, value, min, max, step = 1, onChange }: SliderProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-500">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-purple-600"
      />
    </div>
  );
}
