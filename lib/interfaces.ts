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