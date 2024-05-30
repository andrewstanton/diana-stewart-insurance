const getClientTestimonies = (data: any) =>
  data.map((testimony: any) => ({
    id: testimony.id,
    name: testimony.title,
    testimony: testimony.content,
    img: testimony.image ?? "/images/profile-placeholder.jpg",
  }))

export default getClientTestimonies
