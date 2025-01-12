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
export interface LeftTimelineContainerProps {
  description: string;
  title: string;
  type: string;
  date: string;
}

export interface RightTimelineContainerProps {
    description: string;
    title: string;
    type: string;
    date: string;
  }