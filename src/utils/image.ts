import type { ImageMetadata } from 'astro';

/**
 * Метаданные картинки (width, height, format), не помечая оригинал как используемый.
 * При сборке Astro отдаёт импортированную картинку прокси-объектом: чтение любого её свойства
 * помечает оригинал как нужный, и он копируется в dist, даже если на страницах только webp.
 * Служебное свойство `clone` возвращает копию метаданных без такой пометки.
 * В dev картинка — обычный объект без `clone`, тогда возвращаем её саму.
 */
export function imageMeta(image: ImageMetadata): ImageMetadata {
  return (image as ImageMetadata & { clone?: ImageMetadata }).clone ?? image;
}
