// Инлайн-замена пакета `hex-to-rgba` (убрали зависимость). Поддерживает #RGB / #RRGGBB / #RRGGBBAA
// (альфа из 8-значного хекса игнорируется в пользу переданной). alpha — число 0..1.
export default function hexToRgba(hex: string, alpha = 1): string {
    let normalized = hex.replace('#', '');
    if (normalized.length === 3) {
        normalized = normalized
            .split('')
            .map((char) => char + char)
            .join('');
    }
    const r = parseInt(normalized.slice(0, 2), 16);
    const g = parseInt(normalized.slice(2, 4), 16);
    const b = parseInt(normalized.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
