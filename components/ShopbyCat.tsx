import React from 'react'
import CategoryCard from './CategoryCard'

const ShopbyCat = () => {

    const categories = [
  { title: "1 Mukhi", img: "/images/1-mukhi.jpg" },
  { title: "5 Mukhi", img: "/images/5-mukhi.jpg" },
  { title: "Bracelets", img: "/images/bracelet.jpg" },
  { title: "Malas", img: "/images/mala.jpg" },
];

  return (
<>
<section className="container mx-auto px-4 mt-12">
        <h2 className="text-3xl font-bold text-brown mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.title} title={cat.title} img={cat.img} />
          ))}
        </div>
      </section>
</>
  )
}

export default ShopbyCat