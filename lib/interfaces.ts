import {ReactNode} from "react";

export interface Project{
    id: number;
    name: string;
    description: string;
    image: string;
    url: string;
    technologies: string[];
    github: string;
}

export interface TimelineElement{
    title: string,
    type: string,
    date: string,
    description: string

}

export interface Email{
    name: string;
    email: string;
    subject: string;
    message: string;

}
export interface TimelineContainerProps {
    id: number
  description: string;
  company: string;
  role: string;
  date: string;
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
  }