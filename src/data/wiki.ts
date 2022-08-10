export const wikis = [
  {
    id: "Biodegradable",
    name: "Biodegradable",
    tagline:
      "Biodegradable products and materials quickly decompose into natural materials.",
    compound:
      "Typically, they're made from sustainable materials and plant by-products, such as cornstarch or sugarcane.",
    breakdowntime: "6-9 months",
    intowhat:
      "Natural elements, carbon dioxide, and water vapor by organisms like bacteria and fungi - which aren't harmful to the environment.",
    where: "Compost",
    how: "Because biodegradable products in landfills can create harmful methane, it is better to dispose of them in a commercial compost heap or to send them to a recycling plant. You can also check if there is a biogas plant in your area, which uses biodegradable products to create methane which they then use to generate electricity. Biodegradable plastic may be engineered to biodegrade in soil or water.",
    nottodo:
      "Do not recycle or throw in garbage. Biodegradable plastics (except for PET) should NOT be recycled, because they contaminate the process and result in low-quality recycled products. Garbage ends up in landfills. Most landfills are compacted so tightly, there’s not much dirt, very little oxygen, and few if any microorganisms and thus do not let much air in. Biodegradation in a landful that does take place does so very slowly.",
    label:
      "It's hard to tell from packaging, sure-fire way is to ask manufacturer for a third-party certification",
    icon: "https://i.ibb.co/nmwByrS/biodegradable.png",
    image: "https://files.worldwildlife.org/wwfcmsprod/images/compostable_plastic_HEADER___shutterstock___Sustainability_Works/blog_show/5ppxnfvote_shutterstock_1254457303_swheader.jpg",
  },
  {
    id: "Compostable",
    name: "Compostable",
    tagline:
      "Compostable products and materials break down into nutrient-rich products, which generate healthy soil for the planet.",
    compound: "Cornstarch, bagase, and PLA plastic",
    breakdowntime: "90 days",
    intowhat:
      "Nutrient rich products - which generate healthy soil for the planet.",
    where: "Compost",
    how: "Industrial compost facility: For compostable products to break down correctly, they need to be thrown away in a compost heap. Compost heaps are rich in microorganisms and reach high temperatures, which allow products to break down quickly. These types of products do not break down easily in traditional landfills, so compostable products should not be thrown in the trash. While many compostable products mimic the look of plastic, they should not be recycled.",
    nottodo:
      "Do not recycle or throw in garabge. Compostable products are not recyclable, they contaminate the process and result in low-quality recycled products. Garbage ends up in landfills. Most landfills are compacted so tightly, there’s not much dirt, very little oxygen, and few if any microorganisms and thus do not let much air in. Biodegradation in a landful that does take place does so very slowly.",
    label: "Compostable must be clearly indicated on packaging.",
    icon: "https://i.ibb.co/FYydjfN/compostable.png",
    image: "https://www.adhesiveplatform.com/wp-content/uploads/2019/06/compostable-adhesives-1030x671.jpg",
  },
  {
    id: "Recyclable",
    name: "Recyclable",
    tagline:
      "Recyclable products and materials can be reprocessed into raw material.",
    compound: "7 types of plastic",
    breakdowntime: "5 years to never",
    intowhat:
      "Other plastic packaged items, as long as the plastic being recycled meets purity standards and doesn't have hazardous contaminants.",
    where: "Recycle",
    how: "Collect, Sort, Process: Recyclable materials are generated by a consumer or business and then collected by a private hauler or government entity. The materials are transported by the collector to a processing facility, such as a materials recovery facility or paper processor. At the processing facility, the recyclables are sorted, cleaned of contaminants and prepared for transport to a milling facility or directly to a manufacturing facility. Some commodities may require additional processing for additional sorting and decontamination. For example, glass and plastic are often sent to glass beneficiation plants and plastics reclaimers, respectively, where they are processed into mill-ready forms.",
    nottodo:
      "You can only recycled plastic a few times, as recycled plastic may be of lower qualities.",
    label:
      "Recyclable products are labeled with a small triangle made of arrows. 7 categories of plastics known as resin numbers (yes, the numbers printed in the center of the triangle), the first category being the highest grade plastics, the seventh being a catch-all category that includes items like biodegradable products.",
    icon: "https://i.ibb.co/VNRJRML/recycle-sign.png",
    image: "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=1788&h=894&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2017%2F05%2F30%2Ffull-recycle-bin.jpg",
  },
];

export type Wiki = typeof wikis[0];
