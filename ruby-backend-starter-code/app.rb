require 'sinatra'

# missing do
get '/' do
  File.read('index.html')
end

get 'favorites' do
  response.header['Content-Type'] = 'application/json'
  File.read('data.json')
end

get '/favorites' do
  file = JSON.parse(File.read('data.json'))
  # missing end or use single line
  # unless params[:name] && params[:oid]
  #   return 'Invalid Request'
  return 'Invalid Request' unless params[:name] && params[:oid]
    
  movie = { name: params[:name], oid: params[:oid] }
  file << movie
  File.write('data.json',JSON.pretty_generate(file))
  movie.to_json
end
