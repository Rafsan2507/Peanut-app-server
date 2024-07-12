import Swiper from './swipesModel'

export async function addSwiper (data: { swipedById: number, swipedId: number}) {
    try {
      const newSwiper = await Swiper.create(data);
      return newSwiper;
    } catch (error) {
      throw new Error('Error adding swiper.');
    }
  };

  export async function findMatch (swipedById: number, swipedId: number) {
      const match = await Swiper.findOne({
        where: {
          swipedById: swipedId,
          swipedId: swipedById,
        },
      });
  
      return match;
    
  }