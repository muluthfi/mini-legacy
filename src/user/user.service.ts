import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import * as bcrypt from "bcryptjs";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

    async findByNpwp(npwp:number) {
        return this.userRepo.findOne({ where: { npwp } });
    }
    async findByEmail(email:string) {
        return this.userRepo.findOne({ where: { email } });
    }

    async create(npwp:number, password:string, email:string) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const userExist = await this.findByEmail(email);
        // const npwpGenerated = Math.floor(100000000000 + Math.random() * 900000000000);
        // npwp = npwpGenerated;
        if (userExist) {
            throw new BadRequestException('email telah terdaftar dengan NPWP ');
        } else {
            const user = this.userRepo.create({ npwp, password: hashedPassword, email });
            return this.userRepo.save(user);
        }
        
    }
        
}