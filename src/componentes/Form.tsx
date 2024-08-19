import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Label } from '../components/ui/label'
import { Button } from '../components/ui/button'

export default function Form() {
  return(
    <form className="space-y-4">
      <div>
        <Label htmlFor="name" className="block text-sm font-medium">
          Nombre
        </Label>
        <Input id="name" placeholder="Tu nombre" className="w-full mt-1" />
      </div>
      <div>
        <Label htmlFor="email" className="block text-sm font-medium">
          Email
        </Label>
        <Input id="email" placeholder="Tu email" type="email" className="w-full mt-1" />
      </div>
      <div>
        <Label htmlFor="message" className="block text-sm font-medium">
          Mensaje
        </Label>
        <Textarea id="message" placeholder="Tu mensaje" className="w-full mt-1 min-h-[100px]" />
      </div>
      <Button className="w-full">Enviar mensaje</Button>
    </form>
  )
}