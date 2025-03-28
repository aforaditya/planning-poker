import { Component } from '@angular/core';
import { CardComponent } from '../../../../components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-selection-tray',
  standalone: true,
  templateUrl: './card-selection-tray.component.html',
  styleUrl: './card-selection-tray.component.css',
  imports: [CardComponent, CommonModule],
})
export class CardSelectionTrayComponent {

  deckSequence: number[] = [1,2,3,41,1,1,1,1,1,1,1,1,1,1,1];
  colors: string[] = ['#E40000', '#057D3B', '#2D84B9', '#FCF20B']

  arcHeight = this.deckSequence.length * 5;

  getCardPosition(index: number): string {
    if (this.deckSequence.length <= 2) return `${this.arcHeight}px`; 
    
    const mid = (this.deckSequence.length/2) ;
    index = (mid>=index) ? ( mid - (index - mid)) : index
    const normalizedX = (index - mid) / mid; 
    const heightFactor = Math.pow(normalizedX, 2);

    return `${this.arcHeight * heightFactor}px`;
  }
}
