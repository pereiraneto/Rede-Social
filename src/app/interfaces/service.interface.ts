export interface ServiceInterface<T>{
    findAll(): Promise<T[]>;
    find(id: number): Promise<T>;
    create(object: T): Promise<T>;
    addLike(object: T): void;
    delete(id: number): Promise<T>;  
}