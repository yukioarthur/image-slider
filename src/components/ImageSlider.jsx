import SliderControls from './SliderControls.jsx';
export default function ImageSlider() {
  return (
    <section aria-label="Galeria da vida selvagem">
      <img src="/images/image-3.jpg" alt="Pandas em seu habitat" />
      <h2>Panda-gigante</h2>
      <p>Uma das espécies mais carismáticas da China.</p>
      <SliderControls />
    </section>
  );
}

export default function SliderControls() {
  return <div>
    <button type="button" aria-label="Imagem anterior">←</button>
    <button type="button" aria-label="Próxima imagem">→</button>
  </div>;
}

<main className="grid gap-16 py-20 lg:grid-cols-2 lg:items-center">
  <section className="space-y-7">
    <h1 className="text-5xl font-bold text-ink sm:text-6xl">
      A natureza em cada detalhe.
    </h1>
    <p className="text-lg leading-relaxed text-slate-500">
      Descubra espécies extraordinárias.
    </p>
  </section>
  <ImageSlider />
</main>

export const slides = [
  { id: 'cachorros', image: '/images/image-1.jpg', animal: 'Cachorrinhos', description: 'Companheiros curiosos.' },
  { id: 'urso', image: '/images/image-2.jpg', animal: 'Urso', description: 'Força e vida selvagem.' },
  { id: 'panda', image: '/images/image-3.jpg', animal: 'Panda-gigante', description: 'O panda se alimenta principalmente de bambu.' },
  { id: 'leao', image: '/images/image-4.jpg', animal: 'Leão', description: 'Um grande felino social.' },
  { id: 'girafa', image: '/images/image-5.jpg', animal: 'Girafa', description: 'Animal terrestre de grande altura.' },
];

import { useState } from 'react';
import { slides } from '../data/slides.js';

const [index, setIndex] = useState(2);
const activeSlide = slides[index];

const next = () => setIndex(current => (current + 1) % slides.length);
const previous = () =>
  setIndex(current => (current - 1 + slides.length) % slides.length);


{slides.map((slide, i) => (
  <img
    key={slide.id}
    src={slide.image}
    alt={slide.alt}
    className={i === index ? 'opacity-100' : 'opacity-0'}
  />
))}
<SliderControls
  index={index}
  count={slides.length}
  onPrevious={previous}
  onNext={next}
  onSelect={setIndex}
/>