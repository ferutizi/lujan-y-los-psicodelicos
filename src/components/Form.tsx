import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { Button } from './ui/button'

export default function Form() {
  return(
    <form className="space-y-4">
      <div>
        <Label htmlFor="name" className="block text-sm font-medium">
          Nombre
        </Label>
        <Input id="name" placeholder="Nombre" className="w-full mt-1" />
      </div>
      <div>
        <Label htmlFor="email" className="block text-sm font-medium">
          Email
        </Label>
        <Input id="email" placeholder="Email" type="email" className="w-full mt-1" />
      </div>
      <div>
        <Label htmlFor="message" className="block text-sm font-medium">
          Mensaje
        </Label>
        <Textarea id="message" placeholder="Mensaje..." className="w-full mt-1 min-h-[100px]" />
      </div>
      <Button className="w-full">Enviar mensaje</Button>
    </form>
  )
}