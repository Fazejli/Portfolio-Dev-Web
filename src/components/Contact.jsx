import React from 'react'
import { Mail, Phone } from 'lucide-react'


export default function Contact(){
return (
<section id="contact" className="my-20 text-center">
<h3 className="text-3xl font-semibold mb-6">Contact</h3>
<div className="max-w-xl mx-auto grid md:grid-cols-2 gap-6">
<div className="neu-card p-6 flex items-center gap-4">
<Mail className="w-6 h-6"/>
<div>
<div className="font-semibold">Email</div>
<div className="text-slate-400 text-sm">dev.fazed@gmail.com</div>
</div>
</div>


<div className="neu-card p-6 flex items-center gap-4">
<Phone className="w-6 h-6"/>
<div>
<div className="font-semibold">Téléphone</div>
<div className="text-slate-400 text-sm">+33 6 63 97 26 53</div>
</div>
</div>
</div>
</section>
)
}