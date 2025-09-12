"use client"
import React, { useEffect, useState } from "react"
import Herosection from "@/Components/Herosection/Herosection"
import ProductOne from "@/Components/productOne/productOne"
import ProdcutBanner from "@/Components/prodcutBanner/prodcutBanner"
import ProductTwo from "@/Components/ProductTwo/productTwo"
import ProductsTree from "@/Components/productsTree/productsTree"
import BannerTwo from "@/Components/bannerTwo/bannerTwo"
import ProductsFour from "@/Components/productsFour/productsFour"
import ProdcutFive from "@/Components/productFive/productFive"
import BannerTree from "@/Components/bannerTree/bannerTree"
import Exercise from "@/Components/exercise/exercise"
import TopFooter from "@/Components/topFooter/topFooter"
import Footer from "@/Components/Footer/footer"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer, toast } from "react-toastify"
import Loading from "@/Components/loading/loading"

function Main() {
  const [showOverlay, setShowOverlay] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const isFirstVisit = sessionStorage.getItem("firstVisitDone")
    if (!isFirstVisit) {
      setShowOverlay(true)
      toast.info("آپلود ممکن است کمی طول بکشد...", {
        position: "top-right",
        autoClose: 2000,
        closeButton: false,
        style: { color: "#1565C0", fontWeight: "bold" },
        progress: undefined,
      })

      setLoading(true)
      const timer = setTimeout(() => {
        setShowOverlay(false)
        setLoading(false)
        sessionStorage.setItem("firstVisitDone", "true")
      }, 8000)

      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <main className="max-w-[1440px] mx-auto overflow-x-hidden">
        <Herosection />
        <ProductOne />
      </main>
      <ProdcutBanner />
      <ProductTwo />
      <ProductsTree />
      <BannerTwo />
      <ProductsFour />
      <ProdcutFive />
      <BannerTree />
      <Exercise />
      <TopFooter />
      <Footer />

      <ToastContainer style={{ zIndex: 100001 }} />
      {loading && <Loading />}
    </>
  )
}

export default Main
