// import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '404 Page | Play SaaS Starter Kit and Boilerplate for Next.js',
};

const ErrorPage = () => {
  return (
    <>
      <section className="bg-white py-20 dark:bg-dark-2 lg:py-[110px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-5/12 lg:w-6/12">
              <div className="relative mx-auto aspect-[129/138] max-w-[357px] text-center">
                <Image src="/404.svg" alt="image" fill className="mx-auto max-w-full" />
              </div>
            </div>
            <div className="w-full px-4 md:w-7/12 lg:w-6/12 xl:w-5/12">
              <div>
                <div className="mb-8">
                  <svg width="327" height="132" viewBox="0 0 327 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-outside-1_2014_12631" maskUnits="userSpaceOnUse" x="4" y="22" width="312" height="107" fill="black">
                      <rect fill="white" x="4" y="22" width="312" height="107" />
                      <path d="M80.4688 65C80.4688 73.724 78.8151 81.1458 75.5078 87.2656C72.2266 93.3854 67.7474 98.0599 62.0703 101.289C56.4193 104.492 50.0651 106.094 43.0078 106.094C35.8984 106.094 29.5182 104.479 23.8672 101.25C18.2161 98.0208 13.75 93.3464 10.4688 87.2266C7.1875 81.1068 5.54688 73.6979 5.54688 65C5.54688 56.276 7.1875 48.8542 10.4688 42.7344C13.75 36.6146 18.2161 31.9531 23.8672 28.75C29.5182 25.5208 35.8984 23.9062 43.0078 23.9062C50.0651 23.9062 56.4193 25.5208 62.0703 28.75C67.7474 31.9531 72.2266 36.6146 75.5078 42.7344C78.8151 48.8542 80.4688 56.276 80.4688 65ZM63.3203 65C63.3203 59.349 62.474 54.5833 60.7812 50.7031C59.1146 46.8229 56.7578 43.8802 53.7109 41.875C50.6641 39.8698 47.0964 38.8672 43.0078 38.8672C38.9193 38.8672 35.3516 39.8698 32.3047 41.875C29.2578 43.8802 26.888 46.8229 25.1953 50.7031C23.5286 54.5833 22.6953 59.349 22.6953 65C22.6953 70.651 23.5286 75.4167 25.1953 79.2969C26.888 83.1771 29.2578 86.1198 32.3047 88.125C35.3516 90.1302 38.9193 91.1328 43.0078 91.1328C47.0964 91.1328 50.6641 90.1302 53.7109 88.125C56.7578 86.1198 59.1146 83.1771 60.7812 79.2969C62.474 75.4167 63.3203 70.651 63.3203 65ZM92.6855 127.5V45H109.092V55.0781H109.834C110.563 53.4635 111.618 51.8229 112.998 50.1562C114.404 48.4635 116.227 47.0573 118.467 45.9375C120.732 44.7917 123.545 44.2188 126.904 44.2188C131.279 44.2188 135.316 45.3646 139.014 47.6563C142.712 49.9219 145.667 53.3464 147.881 57.9297C150.094 62.487 151.201 68.2031 151.201 75.0781C151.201 81.7708 150.12 87.4219 147.959 92.0312C145.824 96.6146 142.907 100.091 139.209 102.461C135.537 104.805 131.423 105.977 126.865 105.977C123.636 105.977 120.889 105.443 118.623 104.375C116.383 103.307 114.548 101.966 113.115 100.352C111.683 98.7109 110.589 97.0573 109.834 95.3906H109.326V127.5H92.6855ZM108.975 75C108.975 78.5677 109.469 81.6797 110.459 84.3359C111.449 86.9922 112.881 89.0625 114.756 90.5469C116.631 92.0052 118.91 92.7344 121.592 92.7344C124.3 92.7344 126.592 91.9922 128.467 90.5078C130.342 88.9974 131.761 86.9141 132.725 84.2578C133.714 81.5755 134.209 78.4896 134.209 75C134.209 71.5365 133.727 68.4896 132.764 65.8594C131.8 63.2292 130.381 61.1719 128.506 59.6875C126.631 58.2031 124.326 57.4609 121.592 57.4609C118.883 57.4609 116.592 58.1771 114.717 59.6094C112.868 61.0417 111.449 63.0729 110.459 65.7031C109.469 68.3333 108.975 71.4323 108.975 75ZM162.295 127.5V45H178.701V55.0781H179.443C180.173 53.4635 181.227 51.8229 182.607 50.1562C184.014 48.4635 185.837 47.0573 188.076 45.9375C190.342 44.7917 193.154 44.2188 196.514 44.2188C200.889 44.2188 204.925 45.3646 208.623 47.6563C212.321 49.9219 215.277 53.3464 217.49 57.9297C219.704 62.487 220.811 68.2031 220.811 75.0781C220.811 81.7708 219.73 87.4219 217.568 92.0312C215.433 96.6146 212.516 100.091 208.818 102.461C205.146 104.805 201.032 105.977 196.475 105.977C193.245 105.977 190.498 105.443 188.232 104.375C185.993 103.307 184.157 101.966 182.725 100.352C181.292 98.7109 180.199 97.0573 179.443 95.3906H178.936V127.5H162.295ZM178.584 75C178.584 78.5677 179.079 81.6797 180.068 84.3359C181.058 86.9922 182.49 89.0625 184.365 90.5469C186.24 92.0052 188.519 92.7344 191.201 92.7344C193.91 92.7344 196.201 91.9922 198.076 90.5078C199.951 88.9974 201.37 86.9141 202.334 84.2578C203.324 81.5755 203.818 78.4896 203.818 75C203.818 71.5365 203.337 68.4896 202.373 65.8594C201.41 63.2292 199.99 61.1719 198.115 59.6875C196.24 58.2031 193.936 57.4609 191.201 57.4609C188.493 57.4609 186.201 58.1771 184.326 59.6094C182.477 61.0417 181.058 63.0729 180.068 65.7031C179.079 68.3333 178.584 71.4323 178.584 75ZM281.826 62.1094L266.592 63.0469C266.331 61.7448 265.771 60.5729 264.912 59.5312C264.053 58.4635 262.92 57.6172 261.514 56.9922C260.133 56.3411 258.48 56.0156 256.553 56.0156C253.975 56.0156 251.8 56.5625 250.029 57.6562C248.258 58.724 247.373 60.1562 247.373 61.9531C247.373 63.3854 247.946 64.5964 249.092 65.5859C250.238 66.5755 252.204 67.3698 254.99 67.9687L265.85 70.1562C271.683 71.3542 276.032 73.2812 278.896 75.9375C281.761 78.5937 283.193 82.0833 283.193 86.4062C283.193 90.3385 282.035 93.7891 279.717 96.7578C277.425 99.7266 274.274 102.044 270.264 103.711C266.279 105.352 261.683 106.172 256.475 106.172C248.532 106.172 242.204 104.518 237.49 101.211C232.803 97.8776 230.055 93.3464 229.248 87.6172L245.615 86.7578C246.11 89.1797 247.308 91.0286 249.209 92.3047C251.11 93.5547 253.545 94.1797 256.514 94.1797C259.43 94.1797 261.774 93.6198 263.545 92.5C265.342 91.3542 266.253 89.8828 266.279 88.0859C266.253 86.5755 265.615 85.3385 264.365 84.375C263.115 83.3854 261.188 82.6302 258.584 82.1094L248.193 80.0391C242.334 78.8672 237.972 76.8359 235.107 73.9453C232.269 71.0547 230.85 67.3698 230.85 62.8906C230.85 59.0365 231.891 55.7161 233.975 52.9297C236.084 50.1432 239.04 47.9948 242.842 46.4844C246.67 44.974 251.149 44.2188 256.279 44.2188C263.857 44.2188 269.821 45.8203 274.17 49.0234C278.545 52.2266 281.097 56.5885 281.826 62.1094ZM313.555 25L312.031 81.0156H297.734L296.172 25H313.555ZM304.883 106.016C302.305 106.016 300.091 105.104 298.242 103.281C296.393 101.432 295.482 99.2187 295.508 96.6406C295.482 94.0885 296.393 91.901 298.242 90.0781C300.091 88.2552 302.305 87.3437 304.883 87.3437C307.357 87.3437 309.531 88.2552 311.406 90.0781C313.281 91.901 314.232 94.0885 314.258 96.6406C314.232 98.3594 313.776 99.9349 312.891 101.367C312.031 102.773 310.898 103.906 309.492 104.766C308.086 105.599 306.549 106.016 304.883 106.016Z" />
                    </mask>
                    <path
                      d="M75.5078 87.2656L74.6281 86.7902L74.6265 86.7931L75.5078 87.2656ZM62.0703 101.289L62.5634 102.159L62.5647 102.158L62.0703 101.289ZM23.8672 101.25L24.3633 100.382L23.8672 101.25ZM10.4688 87.2266L9.58744 87.6991L10.4688 87.2266ZM10.4688 42.7344L11.3501 43.2069L10.4688 42.7344ZM23.8672 28.75L24.3603 29.62L24.3633 29.6182L23.8672 28.75ZM62.0703 28.75L61.5742 29.6183L61.5789 29.6209L62.0703 28.75ZM75.5078 42.7344L74.6265 43.2069L74.6281 43.2098L75.5078 42.7344ZM60.7812 50.7031L59.8624 51.0978L59.8647 51.103L60.7812 50.7031ZM53.7109 41.875L53.1612 42.7103L53.7109 41.875ZM32.3047 41.875L32.8544 42.7103L32.3047 41.875ZM25.1953 50.7031L24.2787 50.3033L24.2765 50.3085L25.1953 50.7031ZM25.1953 79.2969L24.2765 79.6915L24.2787 79.6967L25.1953 79.2969ZM32.3047 88.125L32.8544 87.2897L32.3047 88.125ZM53.7109 88.125L53.1612 87.2897L53.7109 88.125ZM60.7812 79.2969L59.8647 78.897L59.8624 78.9022L60.7812 79.2969ZM79.4688 65C79.4688 73.5994 77.8388 80.849 74.6281 86.7902L76.3876 87.7411C79.7914 81.4427 81.4688 73.8486 81.4688 65H79.4688ZM74.6265 86.7931C71.4284 92.7578 67.0787 97.2898 61.5759 100.42L62.5647 102.158C68.4161 98.83 73.0247 94.013 76.3891 87.7382L74.6265 86.7931ZM61.5772 100.419C56.0894 103.53 49.9076 105.094 43.0078 105.094V107.094C50.2226 107.094 56.7492 105.455 62.5634 102.159L61.5772 100.419ZM43.0078 105.094C36.0559 105.094 29.8495 103.517 24.3633 100.382L23.371 102.118C29.1869 105.442 35.7409 107.094 43.0078 107.094V105.094ZM24.3633 100.382C18.8863 97.252 14.5488 92.7199 11.3501 86.754L9.58744 87.6991C12.9512 93.9728 17.546 98.7896 23.371 102.118L24.3633 100.382ZM11.3501 86.754C8.16399 80.8118 6.54688 73.5739 6.54688 65H4.54688C4.54688 73.8219 6.21101 81.4018 9.58744 87.6991L11.3501 86.754ZM6.54688 65C6.54688 56.3995 8.1642 49.1488 11.3501 43.2069L9.58744 42.2618C6.2108 48.5595 4.54688 56.1526 4.54688 65H6.54688ZM11.3501 43.2069C14.5485 37.2416 18.8851 32.7234 24.3603 29.62L23.3741 27.88C17.5472 31.1828 12.9515 35.9876 9.58744 42.2618L11.3501 43.2069ZM24.3633 29.6182C29.8495 26.4833 36.0559 24.9062 43.0078 24.9062V22.9062C35.7409 22.9062 29.1869 24.5584 23.371 27.8818L24.3633 29.6182ZM43.0078 24.9062C49.9062 24.9062 56.0868 26.4826 61.5742 29.6182L62.5665 27.8818C56.7517 24.559 50.224 22.9062 43.0078 22.9062V24.9062ZM61.5789 29.6209C67.08 32.7247 71.4287 37.2428 74.6265 43.2069L76.3891 42.2618C73.0244 35.9864 68.4148 31.1815 62.5617 27.8791L61.5789 29.6209ZM74.6281 43.2098C77.8388 49.151 79.4688 56.4006 79.4688 65H81.4688C81.4688 56.1514 79.7914 48.5573 76.3876 42.2589L74.6281 43.2098ZM64.3203 65C64.3203 59.255 63.4607 54.3443 61.6978 50.3033L59.8647 51.103C61.4872 54.8224 62.3203 59.4429 62.3203 65H64.3203ZM61.7001 50.3085C59.9687 46.2775 57.4956 43.1687 54.2607 41.0397L53.1612 42.7103C56.02 44.5918 58.2605 47.3683 59.8624 51.0978L61.7001 50.3085ZM54.2607 41.0397C51.0313 38.9143 47.2673 37.8672 43.0078 37.8672V39.8672C46.9254 39.8672 50.2968 40.8252 53.1612 42.7103L54.2607 41.0397ZM43.0078 37.8672C38.7483 37.8672 34.9843 38.9143 31.7549 41.0397L32.8544 42.7103C35.7188 40.8252 39.0902 39.8672 43.0078 39.8672V37.8672ZM31.7549 41.0397C28.5215 43.1677 26.0362 46.2746 24.2787 50.3033L26.1119 51.103C27.7398 47.3712 29.9941 44.5927 32.8544 42.7103L31.7549 41.0397ZM24.2765 50.3085C22.5414 54.3479 21.6953 59.2567 21.6953 65H23.6953C23.6953 59.4413 24.5158 54.8188 26.1141 51.0978L24.2765 50.3085ZM21.6953 65C21.6953 70.7433 22.5414 75.6521 24.2765 79.6915L26.1141 78.9022C24.5158 75.1812 23.6953 70.5587 23.6953 65H21.6953ZM24.2787 79.6967C26.0362 83.7254 28.5215 86.8323 31.7549 88.9603L32.8544 87.2897C29.9941 85.4073 27.7398 82.6288 26.1119 78.897L24.2787 79.6967ZM31.7549 88.9603C34.9843 91.0857 38.7483 92.1328 43.0078 92.1328V90.1328C39.0902 90.1328 35.7188 89.1748 32.8544 87.2897L31.7549 88.9603ZM43.0078 92.1328C47.2673 92.1328 51.0313 91.0857 54.2607 88.9603L53.1612 87.2897C50.2968 89.1748 46.9254 90.1328 43.0078 90.1328V92.1328ZM54.2607 88.9603C57.4956 86.8313 59.9687 83.7225 61.7001 79.6915L59.8624 78.9022C58.2605 82.6317 56.02 85.4082 53.1612 87.2897L54.2607 88.9603ZM61.6978 79.6967C63.4607 75.6557 64.3203 70.745 64.3203 65H62.3203C62.3203 70.5571 61.4872 75.1776 59.8647 78.897L61.6978 79.6967ZM92.6855 127.5H91.6855V128.5H92.6855V127.5ZM92.6855 45V44H91.6855V45H92.6855ZM109.092 45H110.092V44H109.092V45ZM109.092 55.0781H108.092V56.0781H109.092V55.0781ZM109.834 55.0781V56.0781H110.48L110.745 55.4897L109.834 55.0781ZM112.998 50.1562L112.229 49.5172L112.228 49.5184L112.998 50.1562ZM118.467 45.9375L118.914 46.8319L118.918 46.8299L118.467 45.9375ZM139.014 47.6562L138.487 48.5063L138.491 48.5089L139.014 47.6562ZM147.881 57.9297L146.98 58.3646L146.981 58.3666L147.881 57.9297ZM147.959 92.0312L147.054 91.6067L147.053 91.6089L147.959 92.0312ZM139.209 102.461L139.747 103.304L139.749 103.303L139.209 102.461ZM118.623 104.375L118.193 105.278L118.197 105.28L118.623 104.375ZM113.115 100.352L112.362 101.009L112.367 101.015L113.115 100.352ZM109.834 95.3906L110.745 94.9779L110.479 94.3906H109.834V95.3906ZM109.326 95.3906V94.3906H108.326V95.3906H109.326ZM109.326 127.5V128.5H110.326V127.5H109.326ZM114.756 90.5469L114.135 91.3309L114.142 91.3362L114.756 90.5469ZM128.467 90.5078L129.088 91.2919L129.094 91.2866L128.467 90.5078ZM132.725 84.2578L131.786 83.9117L131.785 83.9168L132.725 84.2578ZM132.764 65.8594L133.703 65.5154V65.5154L132.764 65.8594ZM128.506 59.6875L129.127 58.9035L128.506 59.6875ZM114.717 59.6094L114.11 58.8147L114.104 58.8188L114.717 59.6094ZM110.459 65.7031L109.523 65.351L110.459 65.7031ZM93.6855 127.5V45H91.6855V127.5H93.6855ZM92.6855 46H109.092V44H92.6855V46ZM108.092 45V55.0781H110.092V45H108.092ZM109.092 56.0781H109.834V54.0781H109.092V56.0781ZM110.745 55.4897C111.431 53.9721 112.433 52.4066 113.768 50.7941L112.228 49.5184C110.803 51.2393 109.696 52.955 108.923 54.6665L110.745 55.4897ZM113.767 50.7953C115.074 49.2228 116.781 47.8983 118.914 46.8319L118.02 45.0431C115.673 46.2163 113.735 47.7043 112.229 49.5172L113.767 50.7953ZM118.918 46.8299C121.006 45.7739 123.653 45.2188 126.904 45.2188V43.2188C123.437 43.2188 120.459 43.8095 118.015 45.0451L118.918 46.8299ZM126.904 45.2188C131.094 45.2188 134.948 46.3132 138.487 48.5063L139.54 46.8062C135.683 44.4159 131.464 43.2188 126.904 43.2188V45.2188ZM138.491 48.5089C141.999 50.6581 144.835 53.9234 146.98 58.3646L148.781 57.4948C146.499 52.7694 143.424 49.1857 139.536 46.8036L138.491 48.5089ZM146.981 58.3666C149.11 62.7481 150.201 68.3032 150.201 75.0781H152.201C152.201 68.103 151.079 62.2258 148.78 57.4928L146.981 58.3666ZM150.201 75.0781C150.201 81.6683 149.136 87.1651 147.054 91.6067L148.864 92.4558C151.105 87.6787 152.201 81.8734 152.201 75.0781H150.201ZM147.053 91.6089C144.985 96.047 142.185 99.3662 138.669 101.619L139.749 103.303C143.629 100.816 146.662 97.1822 148.865 92.4536L147.053 91.6089ZM138.671 101.618C135.167 103.854 131.241 104.977 126.865 104.977V106.977C131.604 106.977 135.907 105.755 139.747 103.304L138.671 101.618ZM126.865 104.977C123.742 104.977 121.149 104.46 119.049 103.47L118.197 105.28C120.628 106.426 123.53 106.977 126.865 106.977V104.977ZM119.053 103.472C116.917 102.454 115.194 101.189 113.863 99.688L112.367 101.015C113.901 102.744 115.85 104.161 118.193 105.278L119.053 103.472ZM113.869 99.6939C112.489 98.1133 111.453 96.5407 110.745 94.9779L108.923 95.8034C109.725 97.5739 110.877 99.3086 112.362 101.009L113.869 99.6939ZM109.834 94.3906H109.326V96.3906H109.834V94.3906ZM108.326 95.3906V127.5H110.326V95.3906H108.326ZM109.326 126.5H92.6855V128.5H109.326V126.5ZM107.975 75C107.975 78.6573 108.482 81.8924 109.522 84.685L111.396 83.9868C110.457 81.467 109.975 78.4781 109.975 75H107.975ZM109.522 84.685C110.563 87.4804 112.092 89.7137 114.135 91.3309L115.377 89.7628C113.669 88.4113 112.334 86.5039 111.396 83.9868L109.522 84.685ZM114.142 91.3362C116.215 92.9486 118.717 93.7344 121.592 93.7344V91.7344C119.102 91.7344 117.047 91.0619 115.37 89.7575L114.142 91.3362ZM121.592 93.7344C124.494 93.7344 127.013 92.9344 129.087 91.2919L127.846 89.7238C126.171 91.0499 124.106 91.7344 121.592 91.7344V93.7344ZM129.094 91.2866C131.134 89.643 132.65 87.3966 133.665 84.5988L131.785 83.9168C130.872 86.4315 129.549 88.3518 127.839 89.7291L129.094 91.2866ZM133.663 84.6039C134.701 81.7894 135.209 78.5825 135.209 75H133.209C133.209 78.3967 132.727 81.3616 131.786 83.9117L133.663 84.6039ZM135.209 75C135.209 71.4458 134.715 68.2784 133.703 65.5154L131.825 66.2034C132.74 68.7008 133.209 71.6271 133.209 75H135.209ZM133.703 65.5154C132.687 62.742 131.169 60.5207 129.127 58.9035L127.885 60.4715C129.592 61.823 130.914 63.7163 131.825 66.2034L133.703 65.5154ZM129.127 58.9035C127.05 57.2595 124.518 56.4609 121.592 56.4609V58.4609C124.135 58.4609 126.212 59.1467 127.885 60.4715L129.127 58.9035ZM121.592 56.4609C118.698 56.4609 116.184 57.23 114.11 58.8147L115.324 60.404C116.999 59.1241 119.069 58.4609 121.592 58.4609V56.4609ZM114.104 58.8188C112.082 60.3855 110.565 62.5827 109.523 65.351L111.395 66.0553C112.333 63.5632 113.654 61.6979 115.329 60.3999L114.104 58.8188ZM109.523 65.351C108.481 68.1195 107.975 71.343 107.975 75H109.975C109.975 71.5216 110.457 68.5471 111.395 66.0553L109.523 65.351ZM162.295 127.5H161.295V128.5H162.295V127.5ZM162.295 45V44H161.295V45H162.295ZM178.701 45H179.701V44H178.701V45ZM178.701 55.0781H177.701V56.0781H178.701V55.0781ZM179.443 55.0781V56.0781H180.089L180.355 55.4897L179.443 55.0781ZM182.607 50.1562L181.838 49.5172L181.837 49.5184L182.607 50.1562ZM188.076 45.9375L188.523 46.8319L188.527 46.8299L188.076 45.9375ZM208.623 47.6562L208.096 48.5063L208.101 48.5089L208.623 47.6562ZM217.49 57.9297L216.59 58.3646L216.591 58.3666L217.49 57.9297ZM217.568 92.0312L216.663 91.6067L216.662 91.6089L217.568 92.0312ZM208.818 102.461L209.356 103.304L209.358 103.303L208.818 102.461ZM188.232 104.375L187.802 105.278L187.806 105.28L188.232 104.375ZM182.725 100.352L181.971 101.009L181.977 101.015L182.725 100.352ZM179.443 95.3906L180.354 94.9779L180.088 94.3906H179.443V95.3906ZM178.936 95.3906V94.3906H177.936V95.3906H178.936ZM178.936 127.5V128.5H179.936V127.5H178.936ZM184.365 90.5469L183.745 91.3309L183.751 91.3362L184.365 90.5469ZM198.076 90.5078L198.697 91.2919L198.704 91.2866L198.076 90.5078ZM202.334 84.2578L201.396 83.9117L201.394 83.9168L202.334 84.2578ZM202.373 65.8594L203.312 65.5154V65.5154L202.373 65.8594ZM198.115 59.6875L198.736 58.9035L198.115 59.6875ZM184.326 59.6094L183.719 58.8147L183.714 58.8188L184.326 59.6094ZM180.068 65.7031L179.132 65.351L180.068 65.7031ZM163.295 127.5V45H161.295V127.5H163.295ZM162.295 46H178.701V44H162.295V46ZM177.701 45V55.0781H179.701V45H177.701ZM178.701 56.0781H179.443V54.0781H178.701V56.0781ZM180.355 55.4897C181.04 53.9721 182.042 52.4066 183.378 50.7941L181.837 49.5184C180.412 51.2393 179.305 52.955 178.532 54.6665L180.355 55.4897ZM183.377 50.7953C184.683 49.2228 186.391 47.8983 188.523 46.8319L187.629 45.0431C185.283 46.2163 183.344 47.7043 181.838 49.5172L183.377 50.7953ZM188.527 46.8299C190.615 45.7739 193.262 45.2188 196.514 45.2188V43.2188C193.046 43.2188 190.068 43.8095 187.625 45.0451L188.527 46.8299ZM196.514 45.2188C200.704 45.2188 204.558 46.3132 208.096 48.5063L209.15 46.8062C205.293 44.4159 201.074 43.2188 196.514 43.2188V45.2188ZM208.101 48.5089C211.608 50.6581 214.445 53.9234 216.59 58.3646L218.391 57.4948C216.109 52.7694 213.034 49.1857 209.145 46.8036L208.101 48.5089ZM216.591 58.3666C218.719 62.7481 219.811 68.3032 219.811 75.0781H221.811C221.811 68.103 220.689 62.2258 218.39 57.4928L216.591 58.3666ZM219.811 75.0781C219.811 81.6683 218.746 87.1651 216.663 91.6067L218.474 92.4558C220.714 87.6787 221.811 81.8734 221.811 75.0781H219.811ZM216.662 91.6089C214.594 96.047 211.794 99.3662 208.279 101.619L209.358 103.303C213.238 100.816 216.272 97.1822 218.475 92.4536L216.662 91.6089ZM208.28 101.618C204.777 103.854 200.851 104.977 196.475 104.977V106.977C201.213 106.977 205.516 105.755 209.356 103.304L208.28 101.618ZM196.475 104.977C193.352 104.977 190.758 104.46 188.659 103.47L187.806 105.28C190.238 106.426 193.139 106.977 196.475 106.977V104.977ZM188.663 103.472C186.526 102.454 184.804 101.189 183.473 99.688L181.977 101.015C183.51 102.744 185.46 104.161 187.802 105.278L188.663 103.472ZM183.478 99.6939C182.098 98.1133 181.062 96.5407 180.354 94.9779L178.533 95.8034C179.335 97.5739 180.487 99.3086 181.971 101.009L183.478 99.6939ZM179.443 94.3906H178.936V96.3906H179.443V94.3906ZM177.936 95.3906V127.5H179.936V95.3906H177.936ZM178.936 126.5H162.295V128.5H178.936V126.5ZM177.584 75C177.584 78.6573 178.091 81.8924 179.131 84.685L181.005 83.9868C180.067 81.467 179.584 78.4781 179.584 75H177.584ZM179.131 84.685C180.173 87.4804 181.702 89.7137 183.745 91.3309L184.986 89.7628C183.279 88.4113 181.943 86.5039 181.005 83.9868L179.131 84.685ZM183.751 91.3362C185.824 92.9486 188.327 93.7344 191.201 93.7344V91.7344C188.711 91.7344 186.656 91.0619 184.979 89.7575L183.751 91.3362ZM191.201 93.7344C194.103 93.7344 196.622 92.9344 198.697 91.2919L197.455 89.7238C195.78 91.0499 193.716 91.7344 191.201 91.7344V93.7344ZM198.704 91.2866C200.744 89.643 202.259 87.3966 203.274 84.5988L201.394 83.9168C200.482 86.4315 199.158 88.3518 197.449 89.7291L198.704 91.2866ZM203.272 84.6039C204.311 81.7894 204.818 78.5825 204.818 75H202.818C202.818 78.3967 202.337 81.3616 201.396 83.9117L203.272 84.6039ZM204.818 75C204.818 71.4458 204.324 68.2784 203.312 65.5154L201.434 66.2034C202.349 68.7008 202.818 71.6271 202.818 75H204.818ZM203.312 65.5154C202.296 62.742 200.779 60.5207 198.736 58.9035L197.495 60.4715C199.202 61.823 200.523 63.7163 201.434 66.2034L203.312 65.5154ZM198.736 58.9035C196.659 57.2595 194.127 56.4609 191.201 56.4609V58.4609C193.744 58.4609 195.821 59.1467 197.495 60.4715L198.736 58.9035ZM191.201 56.4609C188.307 56.4609 185.794 57.23 183.719 58.8147L184.933 60.404C186.609 59.1241 188.678 58.4609 191.201 58.4609V56.4609ZM183.714 58.8188C181.691 60.3855 180.174 62.5827 179.132 65.351L181.004 66.0553C181.942 63.5632 183.263 61.6979 184.939 60.3999L183.714 58.8188ZM179.132 65.351C178.091 68.1195 177.584 71.343 177.584 75H179.584C179.584 71.5216 180.067 68.5471 181.004 66.0553L179.132 65.351ZM281.826 62.1094L281.888 63.1075L282.958 63.0416L282.818 61.9784L281.826 62.1094ZM266.592 63.0469L265.611 63.243L265.782 64.0986L266.653 64.045L266.592 63.0469ZM264.912 59.5312L264.133 60.1583L264.141 60.1676L264.912 59.5312ZM261.514 56.9922L261.087 57.8966L261.097 57.9014L261.108 57.906L261.514 56.9922ZM250.029 57.6562L250.546 58.5127L250.555 58.507L250.029 57.6562ZM249.092 65.5859L248.438 66.3428L249.092 65.5859ZM254.99 67.9688L254.78 68.9465L254.793 68.9491L254.99 67.9688ZM265.85 70.1562L266.051 69.1767L266.047 69.1759L265.85 70.1562ZM278.896 75.9375L278.217 76.6708L278.896 75.9375ZM279.717 96.7578L278.929 96.1424L278.925 96.1468L279.717 96.7578ZM270.264 103.711L270.644 104.636L270.647 104.634L270.264 103.711ZM237.49 101.211L236.911 102.026L236.916 102.03L237.49 101.211ZM229.248 87.6172L229.196 86.6186L228.106 86.6758L228.258 87.7567L229.248 87.6172ZM245.615 86.7578L246.595 86.5576L246.423 85.714L245.563 85.7592L245.615 86.7578ZM249.209 92.3047L248.652 93.135L248.66 93.1402L249.209 92.3047ZM263.545 92.5L264.079 93.3452L264.083 93.3432L263.545 92.5ZM266.279 88.0859L267.279 88.1004L267.279 88.0846L267.279 88.0687L266.279 88.0859ZM264.365 84.375L263.744 85.1591L263.755 85.167L264.365 84.375ZM258.584 82.1094L258.78 81.1288L258.779 81.1287L258.584 82.1094ZM248.193 80.0391L247.997 81.0196L247.998 81.0198L248.193 80.0391ZM235.107 73.9453L234.394 74.646L234.397 74.6492L235.107 73.9453ZM233.975 52.9297L233.177 52.3261L233.174 52.3309L233.975 52.9297ZM242.842 46.4844L242.475 45.5542L242.473 45.555L242.842 46.4844ZM274.17 49.0234L273.577 49.8286L273.579 49.8303L274.17 49.0234ZM281.765 61.1113L266.53 62.0488L266.653 64.045L281.888 63.1075L281.765 61.1113ZM267.572 62.8508C267.279 61.3841 266.646 60.0615 265.683 58.8949L264.141 60.1676C264.897 61.0843 265.384 62.1055 265.611 63.243L267.572 62.8508ZM265.691 58.9042C264.72 57.6981 263.453 56.7599 261.92 56.0784L261.108 57.906C262.387 58.4744 263.385 59.229 264.133 60.1583L265.691 58.9042ZM261.94 56.0878C260.396 55.3595 258.59 55.0156 256.553 55.0156V57.0156C258.37 57.0156 259.871 57.3228 261.087 57.8966L261.94 56.0878ZM256.553 55.0156C253.833 55.0156 251.466 55.5933 249.504 56.8055L250.555 58.507C252.134 57.5317 254.116 57.0156 256.553 57.0156V55.0156ZM249.513 56.7999C247.496 58.0162 246.373 59.7473 246.373 61.9531H248.373C248.373 60.5652 249.021 59.4317 250.546 58.5126L249.513 56.7999ZM246.373 61.9531C246.373 63.6944 247.087 65.1756 248.438 66.3428L249.745 64.8291C248.805 64.0172 248.373 63.0764 248.373 61.9531H246.373ZM248.438 66.3428C249.78 67.5015 251.951 68.3382 254.78 68.9464L255.2 66.9911C252.457 66.4014 250.695 65.6496 249.745 64.8291L248.438 66.3428ZM254.793 68.9491L265.652 71.1366L266.047 69.1759L255.188 66.9884L254.793 68.9491ZM265.648 71.1358C271.389 72.3148 275.539 74.1877 278.217 76.6708L279.576 75.2042C276.525 72.3748 271.976 70.3936 266.051 69.1767L265.648 71.1358ZM278.217 76.6708C280.854 79.1165 282.193 82.3287 282.193 86.4062H284.193C284.193 81.838 282.668 78.071 279.576 75.2042L278.217 76.6708ZM282.193 86.4062C282.193 90.1261 281.103 93.3576 278.929 96.1424L280.505 97.3732C282.966 94.2205 284.193 90.551 284.193 86.4062H282.193ZM278.925 96.1468C276.756 98.9572 273.755 101.177 269.88 102.788L270.647 104.634C274.793 102.912 278.095 100.496 280.508 97.3689L278.925 96.1468ZM269.883 102.786C266.042 104.368 261.579 105.172 256.475 105.172V107.172C261.787 107.172 266.517 106.335 270.644 104.636L269.883 102.786ZM256.475 105.172C248.662 105.172 242.557 103.544 238.065 100.392L236.916 102.03C241.851 105.492 248.402 107.172 256.475 107.172V105.172ZM238.07 100.396C233.608 97.2229 231.007 92.9367 230.238 87.4777L228.258 87.7567C229.103 93.7561 231.998 98.5323 236.911 102.026L238.07 100.396ZM229.3 88.6158L245.668 87.7564L245.563 85.7592L229.196 86.6186L229.3 88.6158ZM244.635 86.958C245.178 89.6146 246.514 91.7002 248.652 93.135L249.766 91.4744C248.102 90.3571 247.042 88.7447 246.595 86.5576L244.635 86.958ZM248.66 93.1402C250.767 94.5258 253.408 95.1797 256.514 95.1797V93.1797C253.681 93.1797 251.453 92.5836 249.758 91.4691L248.66 93.1402ZM256.514 95.1797C259.548 95.1797 262.098 94.5984 264.079 93.3452L263.01 91.6548C261.451 92.6412 259.312 93.1797 256.514 93.1797V95.1797ZM264.083 93.3432C266.102 92.0553 267.247 90.3001 267.279 88.1004L265.279 88.0714C265.259 89.4655 264.581 90.653 263.007 91.6568L264.083 93.3432ZM267.279 88.0687C267.248 86.2389 266.454 84.7225 264.976 83.583L263.755 85.167C264.776 85.9545 265.259 86.9122 265.279 88.1032L267.279 88.0687ZM264.986 83.591C263.555 82.4585 261.449 81.6625 258.78 81.1288L258.388 83.09C260.928 83.5979 262.675 84.3123 263.745 85.159L264.986 83.591ZM258.779 81.1287L248.389 79.0583L247.998 81.0198L258.389 83.0901L258.779 81.1287ZM248.389 79.0585C242.639 77.9083 238.491 75.9389 235.818 73.2414L234.397 74.6492C237.453 77.733 242.029 79.826 247.997 81.0196L248.389 79.0585ZM235.821 73.2447C233.186 70.5616 231.85 67.138 231.85 62.8906H229.85C229.85 67.6016 231.352 71.5478 234.394 74.646L235.821 73.2447ZM231.85 62.8906C231.85 59.2278 232.835 56.1234 234.776 53.5285L233.174 52.3309C230.947 55.3089 229.85 58.8451 229.85 62.8906H231.85ZM234.772 53.5333C236.753 50.9157 239.549 48.8684 243.211 47.4137L242.473 45.555C238.53 47.1212 235.415 49.3707 233.177 52.3261L234.772 53.5333ZM243.209 47.4146C246.895 45.9601 251.245 45.2188 256.279 45.2188V43.2188C251.053 43.2188 246.445 43.9878 242.475 45.5542L243.209 47.4146ZM256.279 45.2188C263.728 45.2188 269.457 46.794 273.577 49.8286L274.763 48.2183C270.185 44.8466 263.987 43.2188 256.279 43.2188V45.2188ZM273.579 49.8303C277.727 52.8674 280.14 56.9818 280.835 62.2403L282.818 61.9784C282.054 56.1953 279.362 51.5857 274.761 48.2166L273.579 49.8303ZM313.555 25L314.554 25.0272L314.582 24H313.555V25ZM312.031 81.0156V82.0156H313.004L313.031 81.0428L312.031 81.0156ZM297.734 81.0156L296.735 81.0435L296.762 82.0156H297.734V81.0156ZM296.172 25V24H295.144L295.172 25.0279L296.172 25ZM298.242 103.281L297.535 103.988L297.54 103.993L298.242 103.281ZM295.508 96.6406L296.508 96.6507L296.508 96.6406L296.508 96.6304L295.508 96.6406ZM298.242 90.0781L298.944 90.7902L298.242 90.0781ZM311.406 90.0781L310.709 90.7951L311.406 90.0781ZM314.258 96.6406L315.258 96.6558L315.258 96.6431L315.258 96.6304L314.258 96.6406ZM312.891 101.367L312.04 100.841L312.037 100.846L312.891 101.367ZM309.492 104.766L310.002 105.626L310.014 105.619L309.492 104.766ZM312.555 24.9728L311.032 80.9884L313.031 81.0428L314.554 25.0272L312.555 24.9728ZM312.031 80.0156H297.734V82.0156H312.031V80.0156ZM298.734 80.9877L297.171 24.9721L295.172 25.0279L296.735 81.0435L298.734 80.9877ZM296.172 26H313.555V24H296.172V26ZM304.883 105.016C302.57 105.016 300.608 104.209 298.944 102.569L297.54 103.993C299.575 105.999 302.04 107.016 304.883 107.016V105.016ZM298.949 102.574C297.287 100.912 296.484 98.9559 296.508 96.6507L294.508 96.6305C294.479 99.4816 295.499 101.952 297.535 103.988L298.949 102.574ZM296.508 96.6304C296.485 94.3548 297.285 92.4265 298.944 90.7902L297.54 89.366C295.502 91.3756 294.479 93.8223 294.508 96.6508L296.508 96.6304ZM298.944 90.7902C300.608 89.1503 302.57 88.3438 304.883 88.3438V86.3438C302.04 86.3438 299.575 87.3601 297.54 89.366L298.944 90.7902ZM304.883 88.3438C307.08 88.3438 309.009 89.1422 310.709 90.7951L312.103 89.3611C310.053 87.3682 307.633 86.3438 304.883 86.3438V88.3438ZM310.709 90.7951C312.398 92.4374 313.235 94.3726 313.258 96.6508L315.258 96.6304C315.229 93.8045 314.164 91.3647 312.103 89.3611L310.709 90.7951ZM313.258 96.6255C313.235 98.1676 312.828 99.566 312.04 100.841L313.741 101.893C314.724 100.304 315.229 98.5512 315.258 96.6558L313.258 96.6255ZM312.037 100.846C311.261 102.117 310.242 103.136 308.971 103.912L310.014 105.619C311.555 104.677 312.802 103.43 313.744 101.889L312.037 100.846ZM308.982 103.905C307.734 104.645 306.374 105.016 304.883 105.016V107.016C306.725 107.016 308.438 106.553 310.002 105.626L308.982 103.905Z"
                      fill="#3758F9"
                      mask="url(#path-1-outside-1_2014_12631)"
                    />
                    <path
                      d="M84.4688 67C84.4688 75.724 82.8151 83.1458 79.5078 89.2656C76.2266 95.3854 71.7474 100.06 66.0703 103.289C60.4193 106.492 54.0651 108.094 47.0078 108.094C39.8984 108.094 33.5182 106.479 27.8672 103.25C22.2161 100.021 17.75 95.3464 14.4688 89.2266C11.1875 83.1068 9.54688 75.6979 9.54688 67C9.54688 58.276 11.1875 50.8542 14.4688 44.7344C17.75 38.6146 22.2161 33.9531 27.8672 30.75C33.5182 27.5208 39.8984 25.9062 47.0078 25.9062C54.0651 25.9062 60.4193 27.5208 66.0703 30.75C71.7474 33.9531 76.2266 38.6146 79.5078 44.7344C82.8151 50.8542 84.4688 58.276 84.4688 67ZM67.3203 67C67.3203 61.349 66.474 56.5833 64.7812 52.7031C63.1146 48.8229 60.7578 45.8802 57.7109 43.875C54.6641 41.8698 51.0964 40.8672 47.0078 40.8672C42.9193 40.8672 39.3516 41.8698 36.3047 43.875C33.2578 45.8802 30.888 48.8229 29.1953 52.7031C27.5286 56.5833 26.6953 61.349 26.6953 67C26.6953 72.651 27.5286 77.4167 29.1953 81.2969C30.888 85.1771 33.2578 88.1198 36.3047 90.125C39.3516 92.1302 42.9193 93.1328 47.0078 93.1328C51.0964 93.1328 54.6641 92.1302 57.7109 90.125C60.7578 88.1198 63.1146 85.1771 64.7812 81.2969C66.474 77.4167 67.3203 72.651 67.3203 67ZM96.6855 129.5V47H113.092V57.0781H113.834C114.563 55.4635 115.618 53.8229 116.998 52.1562C118.404 50.4635 120.227 49.0573 122.467 47.9375C124.732 46.7917 127.545 46.2188 130.904 46.2188C135.279 46.2188 139.316 47.3646 143.014 49.6563C146.712 51.9219 149.667 55.3464 151.881 59.9297C154.094 64.487 155.201 70.2031 155.201 77.0781C155.201 83.7708 154.12 89.4219 151.959 94.0312C149.824 98.6146 146.907 102.091 143.209 104.461C139.537 106.805 135.423 107.977 130.865 107.977C127.636 107.977 124.889 107.443 122.623 106.375C120.383 105.307 118.548 103.966 117.115 102.352C115.683 100.711 114.589 99.0573 113.834 97.3906H113.326V129.5H96.6855ZM112.975 77C112.975 80.5677 113.469 83.6797 114.459 86.3359C115.449 88.9922 116.881 91.0625 118.756 92.5469C120.631 94.0052 122.91 94.7344 125.592 94.7344C128.3 94.7344 130.592 93.9922 132.467 92.5078C134.342 90.9974 135.761 88.9141 136.725 86.2578C137.714 83.5755 138.209 80.4896 138.209 77C138.209 73.5365 137.727 70.4896 136.764 67.8594C135.8 65.2292 134.381 63.1719 132.506 61.6875C130.631 60.2031 128.326 59.4609 125.592 59.4609C122.883 59.4609 120.592 60.1771 118.717 61.6094C116.868 63.0417 115.449 65.0729 114.459 67.7031C113.469 70.3333 112.975 73.4323 112.975 77ZM166.295 129.5V47H182.701V57.0781H183.443C184.173 55.4635 185.227 53.8229 186.607 52.1562C188.014 50.4635 189.837 49.0573 192.076 47.9375C194.342 46.7917 197.154 46.2188 200.514 46.2188C204.889 46.2188 208.925 47.3646 212.623 49.6563C216.321 51.9219 219.277 55.3464 221.49 59.9297C223.704 64.487 224.811 70.2031 224.811 77.0781C224.811 83.7708 223.73 89.4219 221.568 94.0312C219.433 98.6146 216.516 102.091 212.818 104.461C209.146 106.805 205.032 107.977 200.475 107.977C197.245 107.977 194.498 107.443 192.232 106.375C189.993 105.307 188.157 103.966 186.725 102.352C185.292 100.711 184.199 99.0573 183.443 97.3906H182.936V129.5H166.295ZM182.584 77C182.584 80.5677 183.079 83.6797 184.068 86.3359C185.058 88.9922 186.49 91.0625 188.365 92.5469C190.24 94.0052 192.519 94.7344 195.201 94.7344C197.91 94.7344 200.201 93.9922 202.076 92.5078C203.951 90.9974 205.37 88.9141 206.334 86.2578C207.324 83.5755 207.818 80.4896 207.818 77C207.818 73.5365 207.337 70.4896 206.373 67.8594C205.41 65.2292 203.99 63.1719 202.115 61.6875C200.24 60.2031 197.936 59.4609 195.201 59.4609C192.493 59.4609 190.201 60.1771 188.326 61.6094C186.477 63.0417 185.058 65.0729 184.068 67.7031C183.079 70.3333 182.584 73.4323 182.584 77ZM285.826 64.1094L270.592 65.0469C270.331 63.7448 269.771 62.5729 268.912 61.5312C268.053 60.4635 266.92 59.6172 265.514 58.9922C264.133 58.3411 262.48 58.0156 260.553 58.0156C257.975 58.0156 255.8 58.5625 254.029 59.6562C252.258 60.724 251.373 62.1562 251.373 63.9531C251.373 65.3854 251.946 66.5964 253.092 67.5859C254.238 68.5755 256.204 69.3698 258.99 69.9687L269.85 72.1562C275.683 73.3542 280.032 75.2812 282.896 77.9375C285.761 80.5937 287.193 84.0833 287.193 88.4062C287.193 92.3385 286.035 95.7891 283.717 98.7578C281.425 101.727 278.274 104.044 274.264 105.711C270.279 107.352 265.683 108.172 260.475 108.172C252.532 108.172 246.204 106.518 241.49 103.211C236.803 99.8776 234.055 95.3464 233.248 89.6172L249.615 88.7578C250.11 91.1797 251.308 93.0286 253.209 94.3047C255.11 95.5547 257.545 96.1797 260.514 96.1797C263.43 96.1797 265.774 95.6198 267.545 94.5C269.342 93.3542 270.253 91.8828 270.279 90.0859C270.253 88.5755 269.615 87.3385 268.365 86.375C267.115 85.3854 265.188 84.6302 262.584 84.1094L252.193 82.0391C246.334 80.8672 241.972 78.8359 239.107 75.9453C236.269 73.0547 234.85 69.3698 234.85 64.8906C234.85 61.0365 235.891 57.7161 237.975 54.9297C240.084 52.1432 243.04 49.9948 246.842 48.4844C250.67 46.974 255.149 46.2188 260.279 46.2188C267.857 46.2188 273.821 47.8203 278.17 51.0234C282.545 54.2266 285.097 58.5885 285.826 64.1094ZM317.555 27L316.031 83.0156H301.734L300.172 27H317.555ZM308.883 108.016C306.305 108.016 304.091 107.104 302.242 105.281C300.393 103.432 299.482 101.219 299.508 98.6406C299.482 96.0885 300.393 93.901 302.242 92.0781C304.091 90.2552 306.305 89.3437 308.883 89.3437C311.357 89.3437 313.531 90.2552 315.406 92.0781C317.281 93.901 318.232 96.0885 318.258 98.6406C318.232 100.359 317.776 101.935 316.891 103.367C316.031 104.773 314.898 105.906 313.492 106.766C312.086 107.599 310.549 108.016 308.883 108.016Z"
                      fill="#3758F9"
                    />
                  </svg>
                </div>
                <h3 className="mb-5 text-2xl font-semibold text-dark dark:text-white">We Can&#39;t Seem to Find The Page You&#39;re Looking For.</h3>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                <a href="/#" className="rounded-md bg-dark px-7 py-3 text-base font-medium text-white transition hover:bg-primary">
                  Go To Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
