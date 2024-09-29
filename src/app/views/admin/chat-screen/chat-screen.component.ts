import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

interface Message {
  text: string;
  isMine: boolean;
}


@Component({
  selector: 'app-chat-screen',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    FormsModule
  ],
  templateUrl: './chat-screen.component.html',
  styleUrl: './chat-screen.component.css'
})
export class ChatScreenComponent {

  messages: Message[] = [];
  newMessage: string = '';
  people = [
    {
      id: 1,
      name: 'John Doe',
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      lastMessage: 'Hey, how are you?'
    },
    {
      id: 2,
      name: 'Jane Smith',
      profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
      lastMessage: 'Let’s catch up later!'
    },
    {
      id: 3,
      name: 'Samuel Green',
      profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
      lastMessage: 'Good morning!'
    },
    {
      id: 4,
      name: 'Emily White',
      profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
      lastMessage: 'Don’t forget the meeting tomorrow.'
    },
    {
      id: 5,
      name: 'Michael Brown',
      profileImage: 'https://randomuser.me/api/portraits/men/5.jpg',
      lastMessage: 'Can you send me the files?'
    },
    {
      id: 6,
      name: 'Sophia Blue',
      profileImage: 'https://randomuser.me/api/portraits/women/6.jpg',
      lastMessage: 'It was great seeing you!'
    },
    {
      id: 7,
      name: 'David Black',
      profileImage: 'https://randomuser.me/api/portraits/men/7.jpg',
      lastMessage: 'Let’s have lunch together.'
    },
    {
      id: 8,
      name: 'Olivia Pink',
      profileImage: 'https://randomuser.me/api/portraits/women/8.jpg',
      lastMessage: 'Happy Birthday!'
    },
    {
      id: 9,
      name: 'James Yellow',
      profileImage: 'https://randomuser.me/api/portraits/men/9.jpg',
      lastMessage: 'What time are we meeting?'
    },
    {
      id: 10,
      name: 'Chloe Red',
      profileImage: 'https://randomuser.me/api/portraits/women/10.jpg',
      lastMessage: 'See you later!'
    }
  ];
  selectedPerson: any = null; // Holds the currently selected person


  // Method to select a person and load their messages
  selectPerson(person: any) {
    this.selectedPerson = person;
    this.loadMessages(person.id); // Assuming a method to load messages based on person ID
  }

  // Placeholder for the loadMessages method
  loadMessages(personId: number) {
    // Here you would load the messages for the selected person
    // For now, we can just assign some dummy messages
    this.messages = [
      { text: `Hello, ${this.selectedPerson.name}!`, isMine: false },
      { text: 'How can I help you today?', isMine: true },
    ];
  }

  // Method to send a message
  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ text: this.newMessage, isMine: true });
      this.newMessage = '';
      // Add logic to send the message to the server or other person
    }
  }
}

