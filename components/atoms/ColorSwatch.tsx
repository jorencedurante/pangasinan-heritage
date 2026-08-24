interface ColorSwatchProps {
  name: string;
  hex: string;
}

export default function ColorSwatch({ name, hex }: ColorSwatchProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div
        className="h-16 w-full border-b border-gray-200"
        style={{ backgroundColor: hex }}
        role="img"
        aria-label={`Swatch of ${name} in the color ${hex}`}
      />
      <div className="p-2">
        <p className="text-sm font-semibold text-gray-900">{name}</p>
        <p className="text-xs uppercase text-gray-500">{hex}</p>
      </div>
    </div>
  );
}
