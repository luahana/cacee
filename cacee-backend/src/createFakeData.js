import Collection from './models/collection';

export default function createFakeData() {
  const collections = [...Array(3).keys()].map(i => ({
    category: 'bracelets',
    name: `bracelets ${i + 80}`,
    colors: ['white', 'yellow', 'rose'],
    prices: [80 + i * 4, 81 + i * 4],
    desc:
      'A dainty, organically shaped heart sits horizontally on a thin band. Dipped in 14k gold and finished in a high polish.' +
      '\n' +
      'NOTE: Named after Layla and Majnun - a classic story of love most notably expressed by the great poets Nizami Ganjavi and Muhammad Fuzuli. It has been presented in many Middle Eastern and sub-continental cultures; Muslim, Sufi, Hindu, and secular.' +
      '\n\n' +
      '14k gold-dipped brass' +
      '\n' +
      'finish: high polish' +
      '\n\n' +
      'product measurements' +
      '\n' +
      'length: 0.39" / 1cm' +
      '\n' +
      'height: 0.04" / 1mm' +
      '\n' +
      'width: ~0.75"/ 1.9cm (dependant on size)' +
      '\n' +
      'weight: ~0.45oz / 12.68g (dependant on size)' +
      '\n\n' +
      'imported' +
      '\n\n' +
      'style: JB416-HPG,',
    images: [
      'https://cdn.shopify.com/s/files/1/1115/3002/products/JB416_HPG_LAYLA_RING_MAIN_fff4c186-7b48-4d52-b25e-40bbd95496f1.png?v=1578517296',
      'https://cdn.shopify.com/s/files/1/1115/3002/products/JB416_HPG_LAYLA_RING_ALT_4f1722bd-3076-4d42-a709-c70ab095a195.png?v=1578517296',
      'https://cdn.shopify.com/s/files/1/1115/3002/products/JB416_HPG_LAYLA_RING_ALTonfig.png?v=1578517296',
    ],
    bestSeller: false,
    newProduct: false,
  }));

  Collection.insertMany(collections, (err, docs) => {
    console.log(docs);
  });
}
