import { ElementRef } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    // Створення mock-об'єкта ElementRef: Ми створюємо mock-елемент, щоб передати його в конструктор директиви.
    const elementRefMock = new ElementRef(document.createElement('div'));
    // Передача elementRef у конструктор: Тепер ви передаєте elementRefMock при створенні екземпляра HighlightDirective.
    const directive = new HighlightDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
