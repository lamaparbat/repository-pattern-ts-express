
import UserService from "../../../src/modules/user/services";
import UserRepository from "../../../src/modules/user/repositories";
import { mockSingleUser } from "../mocks/user.mocks";


jest.mock('../../../src/modules/user/repositories');

describe("UserService", () => {
    let userService: UserService;
    let userRepositoryMock: jest.Mocked<UserRepository>;


    beforeEach(() => {
        userRepositoryMock = {
            findOne: jest.fn()
        } as unknown as jest.Mocked<UserRepository>;
        userService = new UserService({ userRepository: userRepositoryMock });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('It Should return login successfull message', async () => {
        const loginParams = { username: 'Parbat Lama', password: 'abc' };

        userRepositoryMock.findOne.mockResolvedValue(mockSingleUser);

        const result = await userService.login(loginParams);

        expect(result?.data).toEqual(mockSingleUser);
        expect(result?.error).toBeNull();
    });

    it('It Should return login failed message', async () => {
        const loginParams = { username: 'Ram Grg', password: 'sdabc' };

        const notFoundMockValue = null;
        (userRepositoryMock.findOne as jest.Mock).mockRejectedValue(notFoundMockValue);
            
        const result = await userService.login(loginParams);

        expect(result?.data).toBe(null);
        expect(result?.error).toBeNull();
    });
});