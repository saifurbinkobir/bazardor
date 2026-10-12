import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const Marquee = async () => {
    const toBangla = (value) =>
  String(value).replace(/[0-9]/g, (digit) => "০১২৩৪৫৬৭৮৯"[digit]);

const units = {
  kg: "কেজি",
  g: "গ্রাম",
  litre: "লিটার",
  piece: "পিস",
  dozen: "ডজন",
};
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data = await res.json();
  const products = data;
  return (
    <div className="border-b border-[#F0F5F0]">
      <MarqueeText direction="right" duration={15} pauseOnHover={true}>
        <div className="flex gap-0">
            {products.map((product) => (
          <p key={product.id} className="flex gap-1.5 py-2 px-1.5 border-x border-[#F0F5F0]">
            <span>{product.image}</span>
            <span>{product.nameBn}</span>
            <span>{toBangla(product.today)}</span>
            <span>
              টাকা/{units[product.unit?.toLowerCase()] || product.unit}
            </span>
            <span className={`flex items-center ${product.change.dir === "up" ? "text-[#D03739]" : "text-[#1A9951]"}`}>
              {product.change.dir === "up" ? <FaCaretUp /> : <FaCaretDown />} {toBangla(Math.abs(product.change.pct))}%
            </span>
          </p>
        ))}
        </div>
      </MarqueeText>
    </div>
  );
};

export default Marquee;
