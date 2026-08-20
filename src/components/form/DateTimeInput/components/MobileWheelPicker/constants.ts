// Геометрия барабана. Все вычисления скролла завязаны на эти константы:
// scrollTop выбранного элемента === index * ITEM_HEIGHT (см. logic.getScrollTopByIndex).
export const ITEM_HEIGHT = 34;

// Нечётное число, чтобы выбранный элемент оказался ровно по центру колонки.
export const VISIBLE_ITEMS = 5;

export const WHEEL_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS;

// Сколько пустого места нужно сверху и снизу, чтобы крайние элементы вставали в центр.
export const EDGE_PADDING = ITEM_HEIGHT * ((VISIBLE_ITEMS - 1) / 2);

// Пауза без событий скролла, после которой считаем, что барабан остановился.
export const SETTLE_MS = 140;
