import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import SearchIcon from '../public/search_icon.svg'
import UserIcon from '../public/user_icon.svg'
import BookmarkIcon from '../public/bookmark_button_white.svg'
import CartBagIcon from '../public/cart_bag_icon.svg'

export default function Home() {
  return (
    <div>
      <Head>
          <title>TANN TRIM</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Encode+Sans&display=swap" rel="stylesheet" />
      </Head>
            <div style={{padding: '2%', backgroundColor: '#0C0C0C', position: "fixed", width: '100%', top: 0}}>
                <div style={{display: "flex", justifyContent: 'space-between'}}>
                    <span style={{
                        fontFamily: 'Comme',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: 20,
                        letterSpacing: '0.55em'
                    }}>TANN TRIM</span>
                    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                        <div className={'header-icon'}><Image  src={SearchIcon} height={18} /></div>
                        <div className={'header-icon'}><Image  src={UserIcon} height={18} /></div>
                        <div className={'header-icon'}><Image  src={BookmarkIcon} height={18} /></div>
                        <div className={'header-icon'}><Image  src={CartBagIcon} height={18} /></div>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 20}}>
                    <div style={{display: 'flex', width: '40%', justifyContent: 'space-between'}}>
                        <span>Bags</span>
                        <span>Travel</span>
                        <span>Accessories</span>
                        <span>Gifting</span>
                        <span>Jewelery</span>
                    </div>
                </div>
            </div>
            <div style={{top: 500}}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur odio in enim consectetur, id dapibus est faucibus. Sed tristique libero vel ultrices suscipit. Integer fermentum dictum hendrerit. Fusce elementum sapien ac leo vehicula pellentesque. Suspendisse vel vulputate ligula. Cras neque nunc, facilisis malesuada porta non, consectetur sed odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, vulputate ac dignissim at, lobortis eleifend lacus. Maecenas lacinia urna dolor, at vestibulum diam vestibulum vitae. Sed eget ante eu ligula dignissim interdum a feugiat enim. Aenean a nisi mollis, posuere risus id, porta purus. Nunc auctor odio in leo sollicitudin pulvinar. Nam varius non massa at scelerisque.

                    Maecenas eu tempus libero, a varius dolor. Aliquam convallis ullamcorper diam et iaculis. Nunc augue velit, sagittis vitae odio interdum, eleifend varius odio. Mauris posuere ultricies nunc lacinia porta. Cras dignissim eu sem non consequat. Duis sit amet turpis in massa dapibus porta. Fusce ullamcorper varius massa sit amet imperdiet. Integer dapibus augue et turpis porta blandit. In sed commodo nunc. Sed varius odio nec nulla dignissim pharetra. Nullam justo mauris, eleifend sed mattis non, pharetra eu lectus. Cras gravida convallis vestibulum.

                    Vivamus ornare convallis velit ac consequat. Nulla ac nibh nec ligula dapibus laoreet. Nullam aliquet pretium pretium. Etiam sagittis est metus, quis sodales lectus luctus vitae. Donec posuere elit id mi volutpat fringilla. Pellentesque ultricies nulla dolor, sed fringilla sapien dignissim ut. Sed bibendum turpis lectus, et vehicula ipsum rutrum porta. Aenean accumsan elit quis sem hendrerit suscipit. Nullam laoreet venenatis massa in posuere. Nunc eleifend mollis purus.

                    Nullam bibendum quam lacinia turpis tempor luctus. Aliquam condimentum magna porta auctor semper. Morbi ornare dolor eros. Sed rutrum nibh justo. Curabitur at erat a tellus condimentum porta. Nam sodales blandit neque. Integer fringilla massa et dui fermentum porttitor. Duis id libero non eros vulputate sollicitudin nec a leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent vulputate mauris et ornare sollicitudin. Praesent feugiat augue eu lorem fermentum, vel posuere ex vestibulum. Pellentesque metus odio, laoreet a erat nec, porta faucibus sem. Ut at rhoncus nisl, a fermentum eros. Mauris turpis tortor, vestibulum in enim ut, bibendum gravida diam. Donec tempus blandit tellus, sed imperdiet leo. Sed gravida non augue non imperdiet.

                    Sed ut dolor ante. Sed ullamcorper quis nisi et volutpat. Donec vehicula turpis mollis odio viverra, eget bibendum ligula blandit. Maecenas pellentesque ipsum non dignissim consectetur. Mauris cursus ante mi, ut ultricies diam interdum mattis. Vivamus et quam rutrum, sollicitudin est sit amet, maximus nisl. In dignissim, odio at blandit tempus, lorem neque tempus felis, euismod laoreet ex leo id augue. Duis eget magna a lectus tempor pellentesque. Nam non ipsum magna. Mauris dictum laoreet odio quis ultricies. Quisque eget lobortis leo, at faucibus felis. Quisque vehicula lectus nulla, at egestas eros malesuada vel. Integer eget neque enim. Proin non tortor ante. Integer in viverra quam. Vivamus egestas velit eget orci rhoncus, vitae gravida sem iaculis.

                    Generated 5 paragraphs, 489 words, 3311 bytes of Lorem Ipsum
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur odio in enim consectetur, id dapibus est faucibus. Sed tristique libero vel ultrices suscipit. Integer fermentum dictum hendrerit. Fusce elementum sapien ac leo vehicula pellentesque. Suspendisse vel vulputate ligula. Cras neque nunc, facilisis malesuada porta non, consectetur sed odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem velit, vulputate ac dignissim at, lobortis eleifend lacus. Maecenas lacinia urna dolor, at vestibulum diam vestibulum vitae. Sed eget ante eu ligula dignissim interdum a feugiat enim. Aenean a nisi mollis, posuere risus id, porta purus. Nunc auctor odio in leo sollicitudin pulvinar. Nam varius non massa at scelerisque.

                    Maecenas eu tempus libero, a varius dolor. Aliquam convallis ullamcorper diam et iaculis. Nunc augue velit, sagittis vitae odio interdum, eleifend varius odio. Mauris posuere ultricies nunc lacinia porta. Cras dignissim eu sem non consequat. Duis sit amet turpis in massa dapibus porta. Fusce ullamcorper varius massa sit amet imperdiet. Integer dapibus augue et turpis porta blandit. In sed commodo nunc. Sed varius odio nec nulla dignissim pharetra. Nullam justo mauris, eleifend sed mattis non, pharetra eu lectus. Cras gravida convallis vestibulum.

                    Vivamus ornare convallis velit ac consequat. Nulla ac nibh nec ligula dapibus laoreet. Nullam aliquet pretium pretium. Etiam sagittis est metus, quis sodales lectus luctus vitae. Donec posuere elit id mi volutpat fringilla. Pellentesque ultricies nulla dolor, sed fringilla sapien dignissim ut. Sed bibendum turpis lectus, et vehicula ipsum rutrum porta. Aenean accumsan elit quis sem hendrerit suscipit. Nullam laoreet venenatis massa in posuere. Nunc eleifend mollis purus.

                    Nullam bibendum quam lacinia turpis tempor luctus. Aliquam condimentum magna porta auctor semper. Morbi ornare dolor eros. Sed rutrum nibh justo. Curabitur at erat a tellus condimentum porta. Nam sodales blandit neque. Integer fringilla massa et dui fermentum porttitor. Duis id libero non eros vulputate sollicitudin nec a leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent vulputate mauris et ornare sollicitudin. Praesent feugiat augue eu lorem fermentum, vel posuere ex vestibulum. Pellentesque metus odio, laoreet a erat nec, porta faucibus sem. Ut at rhoncus nisl, a fermentum eros. Mauris turpis tortor, vestibulum in enim ut, bibendum gravida diam. Donec tempus blandit tellus, sed imperdiet leo. Sed gravida non augue non imperdiet.

                    Sed ut dolor ante. Sed ullamcorper quis nisi et volutpat. Donec vehicula turpis mollis odio viverra, eget bibendum ligula blandit. Maecenas pellentesque ipsum non dignissim consectetur. Mauris cursus ante mi, ut ultricies diam interdum mattis. Vivamus et quam rutrum, sollicitudin est sit amet, maximus nisl. In dignissim, odio at blandit tempus, lorem neque tempus felis, euismod laoreet ex leo id augue. Duis eget magna a lectus tempor pellentesque. Nam non ipsum magna. Mauris dictum laoreet odio quis ultricies. Quisque eget lobortis leo, at faucibus felis. Quisque vehicula lectus nulla, at egestas eros malesuada vel. Integer eget neque enim. Proin non tortor ante. Integer in viverra quam. Vivamus egestas velit eget orci rhoncus, vitae gravida sem iaculis.

                    Generated 5 paragraphs, 489 words, 3311 bytes of Lorem Ipsum
                </p>
            </div>
    </div>
  )
}
