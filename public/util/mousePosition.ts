const getMousePosition = (
  element: HTMLElement,
  event: MouseEvent
): [newCenterX: number, newCentetY: number] => {
  const elementRect: DOMRect = element.getBoundingClientRect();

  const newCenterX: number = event.clientX - elementRect.left;
  const newCenterY: number = event.clientY - elementRect.top;

  return [newCenterX, newCenterY];
};

export default getMousePosition;
