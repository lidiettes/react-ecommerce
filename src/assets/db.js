
import * as photos from './img';

const { photo01, photo02, photo03} = photos;

export const Items = [
    {
        id: 1,
        name:'Pendant Lamp',
        price: '350',
        img: photo01,
        description: 'Flowerpot VP9 Table Lamp Mustard is a portable version of Verner Pantons popular Flowerpot table lamp.'

    },
    {
        id: 2,
        name:'Shuffle Table MH1',
        price: '557',
        img: photo02,
        description: 'Shuffle MH1 designed by Mia Hamborg for &Tradition is a coffee table realized with lacquered MDF and solid oak or marble. Shuffle Table has size, shape, colour, and height variable and individually selectable, according to the Scandinavian model. Available in two finishes.'

    },
    {
        id: 3,
        name:'Tripod HM9',
        price: '366',
        img: photo03,
        description: 'After the success of its floor lamp, &Tradition has expanded the Tripod series to include a table lamp with the same timeless design. Tripod, a table lamp built from powder-coated steel with brass details, reflects the clean minimalism of historic Copenhagen-based duo Hvidt & Mølgaard. Considered Old Masters of mid-century Danish design, their pieces often lend a sculptural element to the spaces they inhabit. This scaled-down table lamp version is available in three colours: Black, Maroon, and Moss.'
    }
]

export default Items;