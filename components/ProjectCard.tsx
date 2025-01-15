import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

type ProjectCardProps = {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
}

export default function ProjectCard({ title, description, technologies, imageUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden bg-gray-800">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0">
        <div className="h-12 w-12 rounded-full bg-gray-700">
          <Image
            src={imageUrl}
            alt={title}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <CardTitle className="font-playfair text-xl text-beige">{title}</CardTitle>
          <CardDescription className="font-playfair text-gray-400">{technologies.join(', ')}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-playfair text-sm text-beige">{description}</p>
      </CardContent>
    </Card>
  )
}

