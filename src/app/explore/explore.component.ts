import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ExploreItem } from '../../config/siteconfig';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink], // Add CommonModule here
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
})
export class ExploreComponent {
  exploreItems = ExploreItem;
}
