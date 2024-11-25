import { Component, OnInit } from '@angular/core';
import { Bus } from 

@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrl: './search-bus.component.css'
})
export class SearchBusComponent implements OnInit {
  searchFrom: string = '';
  searchTo: string = '';
  buses: Bus[] = [];

  constructor(private busService: BusService, private bookingService: BookingService) {}

  ngOnInit(): void {
    this.busService.getBuses().subscribe(buses => this.buses = buses);
  }


}
