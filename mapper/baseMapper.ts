/**
 * Defines the contract for mapping API/domain responses
 * into frontend models.
 *
 * R = Response
 * M = Model
 */
interface IBaseMapper<R, M>{
    /**
     * Maps a single response object into a model
     */
    map(response: R) : M
    /**
     * Maps a list of response objects into a list of model
     */
    mapList(response: R[]) : M[]
}

/**
 * Base implementation of the mapper contract.
 *
 * Subclasses are required to implement the mapping logic
 * for a single object. The list mapping is handled generically
 * by applying the single-object mapper to each item.
 */
export abstract class BaseMapper<R, M> implements IBaseMapper<R, M>{
    /**
     * Maps a single response object into a model.
     *
     * Each concrete mapper defines how the response
     * structure is transformed into the frontend model.
     */
    public abstract map(response: R) : M;
    /**
     * Maps a list of responses by applying the single-object
     * mapper to every item.
     */
    public mapList(response: R[]): M[] {
        return response.map((item) => this.map(item))
    }
}
