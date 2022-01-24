import fs from 'fs';
import Image from 'next/image';
import styles from './thumbnails.module.scss';

console.log(process.env.NEXT_PUBLIC_THUMBS_DIR);
export default function Thumbnails (props: any) {
  const { thumbs } = props;
  const thumbImages = [];
  for (let thumb in thumbs) {
    console.log(thumb);
    thumbImages.push(
      <Image
        key={'image-thumb-' + thumb}
        width={75}
        height={75}
        layout="fixed"
        placeholder="blur"
        blurDataURL="/thumbs/IMG_0022.jpeg"
        className={styles.thumbnail}
        alt={thumbs[thumb]}
        src={process.env.NEXT_PUBLIC_URI_PREFIX + thumbs[thumb]}/>)
  }
  return (
  <>
    Thumbs: <div className={styles.thumbnails}>{ thumbImages }</div>
  </>);
}

export async function getStaticProps() {
  const dir = process.env.NEXT_PUBLIC_THUMBS_DIR;
  const uriPrefix = process.env.NEXT_PUBLIC_URI_PREFIX;
  if (dir && uriPrefix) {
    const thumbs = fs.readdirSync(dir || '.');
    console.log(`Thumbs live at ${dir}`);
    return {
      props: {
        thumbs,
        thumbnails: [
          "one",
          "two",
          "three",
          "one",
          "two",
          "three",
          "one",
          "two",
          "three",
          "one",
          "two",
          "three",
          "one",
          "two",
          "three"
        ]
      }
    };
  }
}
