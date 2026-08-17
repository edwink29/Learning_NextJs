export default function Loading() {
  // Membuat 8 kartu skeleton placeholder
  const skeletonItems = Array.from({ length: 8 });

  return (
    <div className="p-6">
      {/* Skeleton Judul Halaman */}
      <div className="h-9 w-52 bg-gray-200 rounded-md animate-pulse mb-4" />

      {/* Grid Skeleton Kartu Produk */}
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-3 md:grid-cols-4 gap-6 mx-auto max-w-7xl">
        {skeletonItems.map((_, index) => (
          <div
            key={index}
            className="w-full max-w-sm bg-gray-100 p-6 border border-gray-200 rounded-md shadow-md flex flex-col h-full animate-pulse"
          >
            {/* Skeleton Gambar Produk */}
            <div className="mx-auto mb-6 w-48 h-48 bg-gray-300 rounded-md" />

            {/* Skeleton Konten Teks & Tombol */}
            <div className="flex flex-col flex-1">
              {/* Skeleton Judul Produk (2 baris) */}
              <div className="space-y-2 mb-4">
                <div className="h-5 bg-gray-300 rounded w-full" />
                <div className="h-5 bg-gray-300 rounded w-2/3" />
              </div>

              {/* Skeleton Harga & Tombol (Didorong ke bawah dengan mt-auto) */}
              <div className="flex items-center justify-between mt-auto pt-6">
                <div className="h-8 bg-gray-300 rounded w-20" />
                <div className="h-9 bg-gray-300 rounded w-28" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}