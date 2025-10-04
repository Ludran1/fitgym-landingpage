import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  nombres: z.string().trim().min(2, {
    message: "El nombre debe tener al menos 2 caracteres",
  }).max(100, {
    message: "El nombre no puede exceder 100 caracteres",
  }),
  dni: z.string().trim().regex(/^\d{8}$/, {
    message: "El DNI debe tener 8 dígitos",
  }),
  numero: z.string().trim().regex(/^\d{9}$/, {
    message: "El número debe tener 9 dígitos",
  }),
  membresia: z.string().min(1, {
    message: "Debes seleccionar una membresía",
  }),
  metodoPago: z.string().min(1, {
    message: "Debes seleccionar un método de pago",
  }),
});

interface MembershipFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MembershipForm = ({ open, onOpenChange }: MembershipFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombres: "",
      dni: "",
      numero: "",
      membresia: "",
      metodoPago: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    const mensaje = `¡Hola, FitGym! 🏋️‍♂️

Quiero unirme al gimnasio. Aquí están mis datos:

👤 Nombres: ${values.nombres}
📄 DNI: ${values.dni}
📱 Número: ${values.numero}
💳 Membresía: ${values.membresia}
💰 Método de Pago: ${values.metodoPago}

¿Cómo puedo completar mi inscripción? ¡Gracias! 💪`;

    const whatsappUrl = `https://wa.me/51960930024?text=${encodeURIComponent(mensaje)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      onOpenChange(false);
      form.reset();
      
      toast({
        title: "¡Excelente!",
        description: "Te estamos redirigiendo a WhatsApp para completar tu inscripción.",
      });
    }, 500);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black text-fitgym-dark">
            Únete a <span className="text-fitgym-orange">FitGym</span>
          </DialogTitle>
          <DialogDescription>
            Completa tus datos para comenzar tu transformación
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="nombres"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombres Completos</FormLabel>
                  <FormControl>
                    <Input placeholder="Juan Pérez" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dni"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>DNI</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="12345678" 
                      maxLength={8}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="numero"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número de Teléfono</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="987654321" 
                      maxLength={9}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="membresia"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Selecciona tu Membresía</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Elige una membresía" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Membresía Básica - S/ 69/mes">
                        Membresía Básica - S/ 69/mes
                      </SelectItem>
                      <SelectItem value="Membresía Premium - S/ 89/mes">
                        Membresía Premium - S/ 89/mes
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="metodoPago"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Método de Pago</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona método de pago" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Efectivo">
                        Efectivo
                      </SelectItem>
                      <SelectItem value="Yape">
                        Yape
                      </SelectItem>
                      <SelectItem value="Transferencia Bancaria">
                        Transferencia Bancaria
                      </SelectItem>
                      <SelectItem value="Plin">
                        Plin
                      </SelectItem>
                      <SelectItem value="Tarjeta de Crédito/Débito">
                        Tarjeta de Crédito/Débito
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit" 
              className="w-full" 
              variant="orange"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Continuar en WhatsApp"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default MembershipForm;
