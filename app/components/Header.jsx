'use client'

export default function Header() {
  return (
    <section>
      <div>
        <img
          className='w-full object-cover h-[9rem] sm:h-60 md:h-72 lg:h-96 lg:rounded-md ring-1 ring-white'
          src='/images/cover-photo.jpg'
          alt='brooklyn bridge'
          loading='lazy'
        />
        <div className='max-w-100'>
          <div className='-mt-16 sm:-mt-20 lg:-mt-10 flex flex-col lg:flex-row items-end lg:items-center'>
            <div className='mx-auto lg:mx-10'>
              <img
                className='h-40 w-40 rounded-full ring-4 ring-white'
                src='/images/headshot_lasers_september.jpg'
                alt='image of jessica gallagher'
                loading='lazy'
              />
            </div>
            <div className='font-bold mt-4 flex mx-auto lg:m-0'>
              <div className='text-center lg:text-left mt-4 '>
                <h3 className='lg:mt-6'>Piano Covers By Jessica Gallagher</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
