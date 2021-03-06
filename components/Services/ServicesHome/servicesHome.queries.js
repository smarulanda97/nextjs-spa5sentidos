export const queryServicesHomeData = `
query servicesHome {
  services(
    where: {
      published: true,
      promoted_to_front_page: true
    },
    sort: "updated_at:desc", 
    limit: 4
) {
    id
    title_es
    title_en
    slug_es
    slug_en
    summary_es 
    summary_en
    images {
      featured {
        name
        ext
        url
      }
    }
  }
}
`