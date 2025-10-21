import { useEffect, useState } from 'react';

export interface RemoteIconProps {
  name: string;
  size?: number | string;
  color?: string;
  className?: string;
  cdnUrl?: string;
}

export function RemoteIcon({
  name,
  size = 24,
  color = 'currentColor',
  className,
  cdnUrl = 'https://kodless-dev.github.io/icons-cdn/icons',
}: RemoteIconProps) {
  const [svg, setSvg] = useState<string>('');

  useEffect(() => {
    const url = `${cdnUrl}/${name}.svg`;
    fetch(url)
      .then((r) => (r.ok ? r.text() : ''))
      .then(setSvg)
      .catch(() => setSvg(''));
  }, [name, cdnUrl]);

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        color,
        display: 'inline-block',
      }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
