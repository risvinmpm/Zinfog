import Image from 'next/image'
import React from 'react'

const TopBrands: React.FC = () => {

    const brands: string[] = [
        '/avon.png', '/swa.png', '/impex.png', '/elleys.png', '/collatree.png', '/pasta.png', '/bettertech.png',
    ]

    const Brands = (items: string[], size: number): string[][] => {
        const brand: string[][] = []
        for (let i = 0; i < items.length; i += size) {
            brand.push(items.slice(i, i + size))
        }
        return brand
    }

    const brandRows = Brands(brands, 4)

    return (
        <div className="main-padding py-20 bg-[#131321]">
            <h1 className="text-center text-2xl md:text-3xl font-semibold mb-10">
                Top brands choose us for their work
            </h1>

            <div className="space-y-6">
                {brandRows.map((row, rowIndex) => (
                    <div key={`row-${rowIndex}`} className={`flex flex-wrap gap-6 ${row.length < 3 ? 'justify-center' : 'justify-between'}`}>
                        {row.map((src, index) => (
                            <Image key={`brand-${rowIndex}-${index}`} src={src} width={100} height={100} alt={`brand-${rowIndex}-${index}`} className="object-contain" />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopBrands
