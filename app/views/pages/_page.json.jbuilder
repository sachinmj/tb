json.extract! page, :id, :title, :layout, :has_header, :has_footer, :is_printable, :is_full_width, :created_at, :updated_at
json.url page_url(page, format: :json)
