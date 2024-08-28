import Image from 'next/image'
import './index.scss'


export default function Background({imageSrc,imageAlt}) {
     return (
          <div className="custom-bg">
          <Image
               alt={imageAlt}
               src={imageSrc}
               placeholder="blur"
               quality={100}
               priority={true}
               fill
               sizes="100vw"
               style={{
                    objectFit: "cover",
               }}
          />
          </div>
     )
}
