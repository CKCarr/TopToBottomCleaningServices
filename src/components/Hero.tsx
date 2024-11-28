'use client';
import React from 'react';
import Image from "next/image";
import Button from '../components/Button';
import { Typography } from '@material-tailwind/react';

export default function Hero() {
  return (
    <div id='hero' className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="">
        <div id="hero-section" className="flex">
            <div id="cta" className="">
                <Typography color="blueGray" variant="h1" className="text-center p-3 mx-5" >
                We offer many services for ​a top to bottom clean ​based on our clients ​individual needsContact Us Today To Schedule a Service
                </Typography>
                <Button label="Get a Quote" className="rounded-half bg-primary" />
                <Button label="Get a Quote" className="rounded-half bg-secondary" />
                <Button label="Get a Quote" className="rounded-half bg-accent" />
                <Button label="Get a Quote" className="rounded-half bg-light" />
                <Button label="Get a Quote" className="rounded-half bg-lighter" />
            </div>
            <div id="hero-img" className=''>
            <Image
                src="/images/T2B-illustrations/heroHome.png"
                alt="Hero"
                width={200}
                height={400}
                layout="responsive"
                className="rounded-lg shadow-sm "
            />
            </div>
        </div>
      </main>
    </div>
  );
}
