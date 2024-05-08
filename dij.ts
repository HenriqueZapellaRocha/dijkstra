class graph{

    private vertices:number
    private adjacencies: Map<number, [number,number][]>

    constructor (vertices: number) {

        this.vertices = vertices
        this.adjacencies = new Map

        for(let i =1; i <= vertices; i++) {
            this.adjacencies.set(i,[]);
        }
    }

     getList(number:number) {
        return this.adjacencies.get(number)
    }

    public add(vertex1: number, vertex2:number,weight:number):void {
        this.adjacencies.get(vertex1)?.push([vertex2,weight])

    }

    public dijkstra(start:number) {
        let visited:Boolean[] = new Array(this.vertices).fill(false)
        let distances:number[] = new Array(this.vertices).fill(Infinity)

        distances[start] = 0
        console.log(distances)
        for(let i = 1; i < this.vertices; i++ ) {

           
            let u = this.nearestNeighbor(distances, visited)
      
            visited[u] = true

            let neighbors = this.adjacencies.get(u)
            if(neighbors !== undefined)
            for(let j=0; j < neighbors?.length; j++) {
                let neighbor = neighbors[j][0]
                let weight = neighbors[j][1]
       
                if(!visited[neighbor] && distances[u] != Infinity && distances[u] + weight < distances[neighbor]) 
                    distances[neighbor] = distances[u] + weight
            }

        }
        return distances.slice(start)
    }

    nearestNeighbor(distance: number[], visited:Boolean[]) {
        let minValue = Infinity
        let nearestNeighbor:number = -1

        for(let i=0; i < this.vertices; i++) {
            if(visited[i] === false && distance[i] <= minValue){
                minValue = distance[i]
                nearestNeighbor = i
            }

        }
        return nearestNeighbor
    }


}

// Example usage:
let grafo = new graph(7);
        grafo.add(3, 4, 4);
        grafo.add(1, 2, 4);
        grafo.add(1, 3, 2);
        grafo.add(2, 3, 3);
        grafo.add(6, 3, 2);
        grafo.add(3, 5, 5);
        grafo.add(5, 4, 1);
        grafo.add(3, 2, 1);
        grafo.add(2, 4, 2);
        grafo.add(2, 5, 3);
        


console.log(grafo.dijkstra(1));