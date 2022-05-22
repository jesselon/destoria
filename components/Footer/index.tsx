import s from "./styles";
import { FunctionComponent, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
const Footer: FunctionComponent = function () {
  const containerRef = useRef(null);

  return (
    <section {...s.footer} ref={containerRef}>
      <div {...s.contentLayer}>
        <div
          {...s.containerFooter}
          style={{ maxWidth: "1440px", width: "100%" }}
        >
          <div {...s.containerFooterBordered}>
            <div {...s.footerContent}>
              <div {...s.mediaBox}>
                <div style={{ cursor: "pointer" }}>
                  <Link passHref href="https://mobile.twitter.com/destoria_nft">
                    <Image
                      src="/media-TT.svg"
                      alt="Twitter"
                      width={27.98}
                      height={27.98}
                    />
                  </Link>
                </div>
                <div style={{ cursor: "pointer" }}>
                  <Link passHref href="https://www.instagram.com/destorianft/">
                    <Image
                      src="/media-IG.svg"
                      alt="Twitter"
                      width={27.98}
                      height={27.98}
                    />
                  </Link>
                </div>
                <div style={{ cursor: "pointer" }}>
                  <Link passHref href="https://discord.com/invite/Y7QSJcWqFH">
                    <Image
                      src="/media-DS.svg"
                      alt="Twitter"
                      width={27.98}
                      height={27.98}
                    />
                  </Link>
                </div>
                <div style={{ cursor: "pointer" }}>
                  <Link passHref href="https://www.youtube.com/channel/UCt9yMDkZilkg7keYwOMZ_qA">
                    <Image
                      src="/media-YT.svg"
                      alt="Twitter"
                      width={27.98}
                      height={27.98}
                    />
                  </Link>
                </div>
                <div style={{ cursor: "pointer" }}>
                  <Link passHref href="https://medium.com/@destorianft">
                    <Image
                      src="/media-MD.svg"
                      alt="Twitter"
                      width={27.98}
                      height={27.98}
                    />
                  </Link>
                </div>
              </div>
              <div {...s.destoria}>
                <Image
                  src="/media-footer-destoria.svg"
                  alt="Destoria"
                  width={168}
                  height={32}
                />
              </div>
              <div
                {...s.contactUs}
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Us
              </div>
            </div>
            <div {...s.footerLower}>
              <div {...s.policyConditions}>
                <div>Privacy & Policy</div>
                <div>Terms & Conditions</div>
              </div>
              <div {...s.destoriaDescriptionInline}>
                © 2021 Destoria, LLC. All Rights Reserved.
              </div>
            </div>
            <div {...s.destoriaDescriptionOutline}>
              © 2021 Destoria, LLC. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
